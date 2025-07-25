import React, { lazy, Suspense, useEffect, useState, memo } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Nav from "./Nav";
import FloatingTabsMenu from "./FloatingTabsMenu";
import { Loader } from "./Loader";

const Skills = lazy(() => import("./Skills"));
const Cards = lazy(() => import("./Cards"));
const Footer = lazy(() => import("./Footer"));
const Endlinks = lazy(() => import("./Endlinks"));
const Projects = lazy(() => import("./Projects"));
const StaggerText = lazy(() => import("./StaggerText"));

const Grid = memo(() => import("./Grid").then(module => module.default));

function Home() {
  const [showExtras, setShowExtras] = useState(false);

  useEffect(() => {
    import("./Skills");
    import("./Projects");

    const onScroll = () => {
      if (window.scrollY > window.innerHeight) setShowExtras(true);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const containerVariants = {
    initial: {},
    animate: { transition: { staggerChildren: 0.3 } },
  };

  const fadeInAnimationVariants = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div id="Home">
      <Nav code={0} />
      <FloatingTabsMenu />

      <div className="w-full min-h-screen flex flex-col-reverse justify-end sm:flex-row fixed overflow-hidden">
        <span className="absolute -right-64 -top-72 sm:top-0 sm:right-0">
          <Suspense fallback={null}><Grid /></Suspense>
        </span>
        <span className="absolute -bottom-96 -left-80 sm:bottom-0 sm:-top-96 sm:-left-96">
          <Suspense fallback={null}><Grid /></Suspense>
        </span>
        <span className="hidden sm:inline absolute -bottom-96 -left-72">
          <Suspense fallback={null}><Grid /></Suspense>
        </span>

        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="sm:w-1/2 relative z-40 h-full text-white p-6 sm:pl-24 sm:pt-32"
        >
          <motion.span
            variants={fadeInAnimationVariants}
            className="font-semibold w-auto hidden sm:inline text-xs sm:text-lg rounded-xl sm:ml-0 px-2 sm:px-3 py-1 bg-purple-700"
          >
            Hello, I'm
          </motion.span>

          <motion.h1
            variants={fadeInAnimationVariants}
            className="relative w-full font-bold text-center mt-5 sm:mt-0 sm:text-left text-4xl sm:text-6xl"
          >
            <motion.span
              variants={fadeInAnimationVariants}
              className="absolute -top-6 -ml-2 sm:hidden font-semibold w-auto text-xs sm:text-lg rounded-xl sm:ml-0 px-2 sm:px-3 py-1 bg-purple-700"
            >
              Hello, I'm
            </motion.span>
            Neeraj Kumar Yogi
          </motion.h1>

          <div className="flex flex-col items-center">
            <motion.p
              variants={fadeInAnimationVariants}
              className="w-full text-xs text-center sm:text-left px-5 sm:px-0 font-medium tracking-wide mt-2 sm:mt-5 text-zinc-300 sm:pl-2 sm:pr-12"
            >
              I’m a web developer who loves building fast, responsive, and visually engaging websites. I focus on clean design, smooth interactions, and great user experiences.
            </motion.p>

            <motion.div
              variants={fadeInAnimationVariants}
              className="w-full mt-3 sm:mt-5 flex items-center justify-center gap-5 sm:pr-16"
            >
              {[
                ["https://www.linkedin.com/in/neeraj-kumar-yogi/", "linkedin"],
                ["https://github.com/nickyogi", "github"],
                ["https://mail.google.com/mail/?view=cm&fs=1&to=nickyogi2143@gmail.com", "email"],
              ].map(([url, type], idx) => (
                <div
                  key={idx}
                  className="p-2 cursor-pointer inline-block rounded-full border-[1px] border-zinc-100 hover:text-purple-600 hover:bg-white duration-200 transition-all"
                >
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <img
                      src={`/Assets/icons/${type}.svg`}
                      alt={`${type} icon`}
                      loading="lazy"
                      className="h-4 w-4 sm:h-6 sm:w-6"
                    />
                  </a>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInAnimationVariants}
              className="inline-block mt-4 bg-purple-700 text-zinc-900 text-xs sm:text-lg sm:mt-10 sm:-ml-20 px-3 py-1 rounded-xl"
            >
              <TypeAnimation
                sequence={["Welcome to my portfolio", 2000, "I create Full Stack Applications", 2000]}
                wrapper="span"
                speed={40}
                style={{ fontSize: "1em", fontWeight: "bold", letterSpacing: "1px", color: "white" }}
                repeat={Infinity}
              />
            </motion.div>
          </div>
        </motion.div>

        <div className="mx-auto sm:w-1/2 sm:mx-0">
          <div className="h-64 w-64 sm:h-[40vw] sm:w-[40vw] pointer-events-none relative">
            <img
              id="personImage"
              className="sm:-mt-5 rounded-full"
              src="/Assets/picture.webp"
              alt="Profile"
              loading="lazy"
              srcSet="/Assets/picture-480.webp 480w, /Assets/picture-800.webp 800w"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      <div className="relative z-40 mt-[100vh] bg-zinc-900 border-[1px] border-zinc-700 rounded-3xl pt-5">
        <div className="sticky top-0 z-50 bg-zinc-900">
          <Nav code={1} />
        </div>

        <hr className="mx-5 h-[1px] bg-zinc-700 outline-none border-none mb-16" />

        <Suspense fallback={<Loader text="Skills" />}>
          <Skills />
        </Suspense>

        <Suspense fallback={<div className="text-white text-center"></div>}>
          <StaggerText />
        </Suspense>

        <Suspense fallback={<Loader text="Projects" />}>
          <Projects />
        </Suspense>

        {showExtras && (
          <>
            <Suspense fallback={<div className="text-white text-center"></div>}>
              <Cards />
            </Suspense>

            <Suspense fallback={<div className="text-white text-center"></div>}>
              <Footer />
            </Suspense>

            <Suspense fallback={<div className="text-white text-center"></div>}>
              <Endlinks />
            </Suspense>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
