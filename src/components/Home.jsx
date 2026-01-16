import React, { lazy, Suspense } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Nav from "./Nav";
import Grid from "./Grid";
import { Loader } from "./Loader";
import FloatingTabsMenu from "./FloatingTabsMenu";

// Lazy-loaded components
const Skills = lazy(() => import("./Skills"));
const Cards = lazy(() => import("./Cards"));
const Footer = lazy(() => import("./Footer"));
const Endlinks = lazy(() => import("./Endlinks"));
const Projects = lazy(() => import("./Projects"));
const StaggerText = lazy(() => import("./StaggerText"));
const Testimonials = lazy(() => import("./Testimonials"));
const Stats = lazy(() => import("./Stats"));
const Services = lazy(() => import("./Services"));
const TechStack = lazy(() => import("./TechStack"));

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
    <div id="Home" >
      <Nav code={0} />

      <FloatingTabsMenu />

      <div className="w-full min-h-screen  fixed overflow-hidden">
        <div className="max-w-[1500px] xxl:max-w-container mx-auto flex flex-col-reverse justify-center items-center lg:flex-row">

       
        {/* Decorative Grid Elements */}
        <span className="absolute -right-40 -top-60 sm:-right-48 sm:-top-64 md:-right-56 md:-top-72 lg:top-0 lg:-right-10 xl:right-0 xxl:right-10 opacity-40 lg:opacity-100">
          <Grid />
        </span>
        <span className="absolute -bottom-80 -left-60 sm:-bottom-96 sm:-left-80 lg:bottom-0 lg:-top-96 lg:-left-80 xl:-left-72 xxl:-left-60 opacity-40 lg:opacity-100">
          <Grid />
        </span>
        <span className="hidden lg:inline absolute -bottom-96 -left-60 xl:-left-52 xxl:-left-44 opacity-60">
          <Grid />
        </span>

        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="lg:w-1/2 relative z-40 h-full text-white p-6 lg:pl-24 lg:pt-32 xxl:pl-32"
        >
          <motion.span
            variants={fadeInAnimationVariants}
            className="font-semibold w-auto hidden lg:inline text-xs lg:text-lg rounded-xl lg:ml-0 px-2 lg:px-3 py-1 bg-purple-700"
          >
            Hello, I'm{" "}
          </motion.span>

          <motion.h1
            variants={fadeInAnimationVariants}
            className="relative w-full font-bold text-center mt-5 lg:mt-0 lg:text-left text-4xl lg:text-6xl xxl:text-7xl"
          >
            <motion.span
              variants={fadeInAnimationVariants}
              className="absolute -top-6 -ml-2 lg:hidden font-semibold w-auto text-xs lg:text-lg rounded-xl lg:ml-0 px-2 lg:px-3 py-1 bg-purple-700"
            >
              Hello, I'm{" "}
            </motion.span>
            Neeraj Kumar Yogi
          </motion.h1>

          <div className="flex flex-col items-center">
            <motion.p
              variants={fadeInAnimationVariants}
              className="w-full text-xs text-center lg:text-left px-5 lg:px-0 font-medium tracking-wide mt-2 lg:mt-5 text-zinc-300 lg:pl-2 lg:pr-12 xxl:text-base"
            >
              I’m a web developer who loves building fast, responsive, and
              visually engaging websites. I focus on clean design, smooth
              interactions, and great user experiences. Whether it’s a simple
              portfolio or a dynamic web app, I enjoy turning ideas into
              functional, polished digital products people love to use.
            </motion.p>

            {/* Social Links */}
            <motion.div
              variants={fadeInAnimationVariants}
              className=" w-full mt-6 lg:mt-8 flex items-center justify-center lg:justify-center gap-4 lg:gap-5"
            >
            <a
              href="https://www.linkedin.com/in/neeraj-kumar-yogi/"
              target="_blank"
              className="group p-3 lg:p-3.5 cursor-pointer rounded-full border-2 border-zinc-100 hover:border-purple-500 hover:bg-gradient-to-br hover:from-purple-600 hover:to-purple-700 duration-300 transition-all transform hover:scale-110 hover:rotate-6 shadow-md hover:shadow-xl hover:shadow-purple-600/50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 lg:h-6 lg:w-6 group-hover:text-white transition-colors"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path>
              </svg>
            </a>
            <a
              href="https://github.com/nickyogi"
              target="_blank"
              className="group p-3 lg:p-3.5 cursor-pointer rounded-full border-2 border-zinc-100 hover:border-purple-500 hover:bg-gradient-to-br hover:from-purple-600 hover:to-purple-700 duration-300 transition-all transform hover:scale-110 hover:rotate-6 shadow-md hover:shadow-xl hover:shadow-purple-600/50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 lg:h-6 lg:w-6 group-hover:text-white transition-colors"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
              </svg>
            </a>
            <a
              href="mailto:nickyogi2143%40gmail.com?bcc=allhereatonce%40gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 lg:p-3.5 cursor-pointer rounded-full border-2 border-zinc-100 hover:border-purple-500 hover:bg-gradient-to-br hover:from-purple-600 hover:to-purple-700 duration-300 transition-all transform hover:scale-110 hover:rotate-6 shadow-md hover:shadow-xl hover:shadow-purple-600/50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 lg:h-6 lg:w-6 group-hover:text-white transition-colors"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.7134 8.12811L20.4668 8.69379C20.2864 9.10792 19.7136 9.10792 19.5331 8.69379L19.2866 8.12811C18.8471 7.11947 18.0555 6.31641 17.0677 5.87708L16.308 5.53922C15.8973 5.35653 15.8973 4.75881 16.308 4.57612L17.0252 4.25714C18.0384 3.80651 18.8442 2.97373 19.2761 1.93083L19.5293 1.31953C19.7058 0.893489 20.2942 0.893489 20.4706 1.31953L20.7238 1.93083C21.1558 2.97373 21.9616 3.80651 22.9748 4.25714L23.6919 4.57612C24.1027 4.75881 24.1027 5.35653 23.6919 5.53922L22.9323 5.87708C21.9445 6.31641 21.1529 7.11947 20.7134 8.12811ZM2 4C2 3.44772 2.44772 3 3 3H14V5H4.5052L12 11.662L16.3981 7.75259L17.7269 9.24741L12 14.338L4 7.22684V19H20V11H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4Z"></path>
              </svg>
            </a>
          </motion.div>

          {/* Type Animation Badge */}
          <motion.div
            variants={fadeInAnimationVariants}
            className="inline-block mt-6 lg:mt-10 px-4 py-2.5 lg:px-5 lg:py-3 bg-gradient-to-r from-purple-700 to-purple-600 rounded-xl shadow-lg shadow-purple-700/40 hover:shadow-purple-600/50 transition-shadow duration-300"
          >
            <TypeAnimation
              sequence={[
                "Welcome to my portfolio",
                2000,
                "I create Full Stack Applications 🚀",
                2000,
                "I'm skilled in HTML, CSS 🎨",
                2000,
                "I'm skilled in Javascript ⚡",
                2000,
                "I love to create great UI/UX 💡",
                2000,
                "I'm skilled in React JS ⚛️",
                2000,
                "I'm skilled in Express JS 🌐",
                2000,
                "I'm skilled in Node JS 💻",
                2000,
                "I'm skilled in MongoDB 🍃",
                2000,
                "I love to create Web Applications 🎯",
                2000,
                "I'm skilled in SQL 🗄️",
                2000,
                "I'm skilled in Tailwind CSS 🎨",
                2000,
                "I'm skilled in Wordpress 📝",
                2000,
                "I rank websites using SEO 📈",
                2000,
                "I can build Frontend 🎨",
                2000,
                "I can build Backend ⚙️",
                2000,
                "I can build Databases 💾",
                2000,
              ]}
              wrapper="span"
              speed={40}
              className="text-xs sm:text-sm lg:text-base xl:text-lg font-bold tracking-wide text-white"
              repeat={Infinity}
            />
          </motion.div>
        </div>
        </motion.div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end px-6 lg:px-0 lg:pr-16 xl:pr-20 xxl:pr-24 mb-8 lg:mb-0">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 xxl:w-[28rem] xxl:h-[28rem] pointer-events-none group">
            <img
              id="personImage"
              className="relative z-10 rounded-full w-full h-full object-cover shadow-2xl shadow-purple-900/30 ring-4 ring-purple-600/20 group-hover:ring-purple-500/40 transition-all duration-500 transform group-hover:scale-105"
              src="/Assets/picture.jpg"
              alt="Neeraj Kumar Yogi - Web Developer"
            />
            <svg
              id="sw-js-blob-svg"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              className="absolute inset-0 w-full h-full opacity-60 group-hover:opacity-80 transition-opacity duration-500"
            >
              <defs>
                <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                  <stop
                    id="stop1"
                    stopColor="rgba(126, 34, 206, 0.4)"
                    offset="0%"
                  ></stop>
                  <stop
                    id="stop2"
                    stopColor="rgba(168, 85, 247, 0.4)"
                    offset="100%"
                  ></stop>
                </linearGradient>
              </defs>
              <path
                fill="none"
                d="M19.7,-29.8C26.6,-26.3,34,-22.6,38.2,-16.5C42.4,-10.5,43.4,-2.1,42.2,6C40.9,14.1,37.5,21.8,32.2,27.8C26.8,33.8,19.7,38.1,11.7,41C3.7,43.9,-5,45.3,-12.1,42.6C-19.2,39.8,-24.6,32.9,-29.8,26.2C-35.1,19.5,-40.1,13,-42.6,5.2C-45.1,-2.5,-45.1,-11.6,-41.3,-18.4C-37.5,-25.3,-29.9,-30.1,-22.4,-33.3C-14.9,-36.6,-7.5,-38.3,-0.5,-37.5C6.4,-36.7,12.8,-33.3,19.7,-29.8Z"
                width="100%"
                height="100%"
                transform="translate(50 50)"
                strokeWidth="2"
                stroke="white"
                // className="animate-pulse"
              ></path>
            </svg>
          </div>
        </div>
         </div>
      </div>

      <div className="relative z-40 mt-[100vh] bg-zinc-900 border-[1px] border-zinc-700 rounded-3xl pt-5 w-full">
      <div className="max-w-container mx-auto">

      
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
        </div>
        
        <Suspense fallback={<Loader text="Projects" />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<div className="text-white text-center"></div>}>
          <Services />
        </Suspense>

        <Suspense fallback={<div className="text-white text-center"></div>}>
          <Stats />
        </Suspense>

        <Suspense fallback={<div className="text-white text-center"></div>}>
          <TechStack />
        </Suspense>

        <Suspense fallback={<div className="text-white text-center"></div>}>
          <Testimonials />
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
