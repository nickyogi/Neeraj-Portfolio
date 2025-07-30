import React, { lazy, Suspense } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Nav from "./Nav";
import Grid from "./Grid";
import { Loader } from "./Loader"
import FloatingTabsMenu from "./FloatingTabsMenu";

// Lazy-loaded components
const Skills = lazy(() => import("./Skills"));
const Cards = lazy(() => import("./Cards"));
const Footer = lazy(() => import("./Footer"));
const Endlinks = lazy(() => import("./Endlinks"));
const Projects = lazy(() => import("./Projects"));
const StaggerText = lazy(() => import("./StaggerText"));

function Home() {
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 40,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div id="Home">
      <Nav code={0} />
      
      <FloatingTabsMenu />
      
      <div className="w-full min-h-screen flex flex-col-reverse justify-end sm:flex-row fixed overflow-hidden">
        <span className="absolute -right-64 -top-72 sm:top-0 sm:right-0">
          <Grid />
        </span>
        <span className="absolute -bottom-96 -left-80 sm:bottom-0 sm:-top-96 sm:-left-96">
          <Grid />
        </span>
        <span className="hidden sm:inline absolute -bottom-96 -left-72">
          <Grid />
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
            Hello, I'm{" "}
          </motion.span>

          <motion.h1
            variants={fadeInAnimationVariants}
            className="relative w-full font-bold text-center mt-5 sm:mt-0 sm:text-left text-4xl sm:text-6xl"
          >
            <motion.span
              variants={fadeInAnimationVariants}
              className="absolute -top-6 -ml-2 sm:hidden font-semibold w-auto text-xs sm:text-lg rounded-xl sm:ml-0 px-2 sm:px-3 py-1 bg-purple-700"
            >
              Hello, I'm{" "}
            </motion.span>
            Neeraj Kumar Yogi
          </motion.h1>

          <div className="flex flex-col items-center">
            <motion.p
              variants={fadeInAnimationVariants}
              className="w-full text-xs text-center sm:text-left px-5 sm:px-0 font-medium tracking-wide mt-2 sm:mt-5 text-zinc-300 sm:pl-2 sm:pr-12"
            >
              I’m a web developer who loves building fast, responsive, and
              visually engaging websites. I focus on clean design, smooth
              interactions, and great user experiences. Whether it’s a simple
              portfolio or a dynamic web app, I enjoy turning ideas into
              functional, polished digital products people love to use.
            </motion.p>

            <motion.div
              variants={fadeInAnimationVariants}
              className="w-full mt-3 sm:mt-5 flex items-center justify-center gap-5 sm:pr-16"
            >
 
              <div className="p-2 cursor-pointer inline-block rounded-full border-[1px] border-zinc-100 hover:text-purple-600 hover:bg-white duration-200 transition-all">
                <a
                  href="https://www.linkedin.com/in/neeraj-kumar-yogi/"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 sm:h-6 sm:w-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path>
                  </svg>
                </a>
              </div>
              <div className="p-2 cursor-pointer inline-block rounded-full border-[1px] border-zinc-100 hover:text-purple-600 hover:bg-white duration-200 transition-all">
                <a href="https://github.com/nickyogi" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 sm:h-6 sm:w-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
                  </svg>
                </a>
              </div>
              <div className="p-2 cursor-pointer inline-block rounded-full border-[1px] border-zinc-100 hover:text-purple-600 hover:bg-white duration-200 transition-all">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=nickyogi2143@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 sm:h-6 sm:w-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.7134 8.12811L20.4668 8.69379C20.2864 9.10792 19.7136 9.10792 19.5331 8.69379L19.2866 8.12811C18.8471 7.11947 18.0555 6.31641 17.0677 5.87708L16.308 5.53922C15.8973 5.35653 15.8973 4.75881 16.308 4.57612L17.0252 4.25714C18.0384 3.80651 18.8442 2.97373 19.2761 1.93083L19.5293 1.31953C19.7058 0.893489 20.2942 0.893489 20.4706 1.31953L20.7238 1.93083C21.1558 2.97373 21.9616 3.80651 22.9748 4.25714L23.6919 4.57612C24.1027 4.75881 24.1027 5.35653 23.6919 5.53922L22.9323 5.87708C21.9445 6.31641 21.1529 7.11947 20.7134 8.12811ZM2 4C2 3.44772 2.44772 3 3 3H14V5H4.5052L12 11.662L16.3981 7.75259L17.7269 9.24741L12 14.338L4 7.22684V19H20V11H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4Z"></path>
                  </svg>
                </a>
              </div>
          
            </motion.div>

            <motion.div
              variants={fadeInAnimationVariants}
              className="inline-block mt-4 bg-purple-700 text-zinc-900 text-xs sm:text-lg sm:mt-10 sm:-ml-20 px-3 py-1 rounded-xl "
            >
              <TypeAnimation
                sequence={[
                  "Welcome to my portfolio", 2000,
                  "I create Full Stack Applications ", 2000,
                  "I'm skilled in HTML, CSS ", 2000,
                  "I'm skilled in Javascript ", 2000,
                  "I love to create great UI/UX ", 2000,
                  "I'm skilled in React JS ", 2000,
                  "I'm skilled in Express JS ", 2000,
                  "I'm skilled in Node JS ", 2000,
                  "I'm skilled in MongoDB ", 2000,
                  "I love to create Web Applications ", 2000,
                  "I'm skilled in SQL ", 2000,
                  "I'm skilled in Tailwind CSS ", 2000,
                  "I'm skilled in Wordpress ", 2000,
                  "I rank websites using SEO ", 2000,
                  "I can build Frontend ", 2000,
                  "I can build Backend ", 2000,
                  "I can build Databases ", 2000,
                ]}
                wrapper="span"
                speed={40}
                style={{
                  fontSize: "1em",
                  display: "inline-block",
                  fontWeight: "bold",
                  letterSpacing: "1px",
                  color: "white",
                }}
                repeat={Infinity}
              />
            </motion.div>
          </div>
        </motion.div>

        <div className="mx-auto sm:w-1/2 sm:mx-0">
          <div className="h-64 w-64 sm:h-[40vw] sm:w-[40vw] pointer-events-none relative">
            <img
              id="personImage"
              className="sm:-mt-5"
              src="/Assets/picture.jpg"
              alt="404 Image not found"
            />
            <svg
              id="sw-js-blob-svg"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              className="-mt-3 sm:mt-0"
            >
              {" "}
              <defs>
                {" "}
                <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                  {" "}
                  <stop
                    id="stop1"
                    stopColor="rgba(255, 255, 255, 1)"
                    offset="0%"
                  ></stop>{" "}
                  <stop
                    id="stop2"
                    stopColor="rgba(247.102, 247.102, 247.102, 1)"
                    offset="100%"
                  ></stop>{" "}
                </linearGradient>{" "}
              </defs>{" "}
              <path
                fill="none"
                d="M19.7,-29.8C26.6,-26.3,34,-22.6,38.2,-16.5C42.4,-10.5,43.4,-2.1,42.2,6C40.9,14.1,37.5,21.8,32.2,27.8C26.8,33.8,19.7,38.1,11.7,41C3.7,43.9,-5,45.3,-12.1,42.6C-19.2,39.8,-24.6,32.9,-29.8,26.2C-35.1,19.5,-40.1,13,-42.6,5.2C-45.1,-2.5,-45.1,-11.6,-41.3,-18.4C-37.5,-25.3,-29.9,-30.1,-22.4,-33.3C-14.9,-36.6,-7.5,-38.3,-0.5,-37.5C6.4,-36.7,12.8,-33.3,19.7,-29.8Z"
                width="100%"
                height="100%"
                transform="translate(50 50)"
                strokeWidth="1"
                stroke="url(#sw-gradient)"
              ></path>{" "}
            </svg>
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

        <Suspense fallback={<div className="text-white text-center"></div>}>
          <Cards />
        </Suspense>

        <Suspense fallback={<div className="text-white text-center"></div>}>
          <Footer />
        </Suspense>

        <Suspense fallback={<div className="text-white text-center"></div>}>
          <Endlinks />
        </Suspense>
      </div>
    </div>
  );
}

export default Home;
