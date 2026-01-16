import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Services() {
  const services = [
    {
      number: "01",
      title: "Web Development",
      description:
        "Crafting pixel-perfect, responsive web experiences with cutting-edge technologies",
      shape: "rounded-tl-[80px] rounded-br-[80px]",
    },
    {
      number: "02",
      title: "UI/UX Design",
      description:
        "Designing intuitive interfaces that users love with research-driven methodology",
      shape: "rounded-tr-[80px] rounded-bl-[80px]",
    },
    {
      number: "03",
      title: "Mobile Responsive",
      description:
        "Building seamless experiences across all devices with mobile-first approach",
      shape: "rounded-tl-[80px] rounded-br-[80px]",
    },
    {
      number: "04",
      title: "Performance",
      description:
        "Optimizing for speed and efficiency with advanced techniques and best practices",
      shape: "rounded-tr-[80px] rounded-bl-[80px]",
    },
    {
      number: "05",
      title: "API Integration",
      description:
        "Seamlessly connecting services and extending functionality with robust APIs",
      shape: "rounded-tl-[80px] rounded-br-[80px]",
    },
    {
      number: "06",
      title: "Full Stack",
      description:
        "End-to-end development with scalable architecture and clean code principles",
      shape: "rounded-tr-[80px] rounded-bl-[80px]",
    },
    {
      number: "07",
      title: "Cloud Hosting",
      description:
        "Deploying and managing applications on cloud platforms with high availability and security",
      shape: "rounded-tl-[80px] rounded-br-[80px]",
    },
    {
      number: "08",
      title: "CI/CD",
      description:
        "Automating build, test, and deployment pipelines for continuous integration and delivery",
      shape: "rounded-tr-[80px] rounded-bl-[80px]",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const rotateAnimation = {
    rotate: [0, 360],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    },
  };

  return (
    <div
      ref={ref}
      className="w-full px-5 sm:px-12 lg:px-24 py-20 sm:py-32 bg-zinc-900 overflow-hidden relative"
    >
      {/* Background animated elements */}
      <motion.div
        animate={rotateAnimation}
        className="absolute top-20 right-20 w-96 h-96 border border-zinc-800/30 rounded-full"
      ></motion.div>
      <motion.div
        animate={{ ...rotateAnimation, transition: { ...rotateAnimation.transition, duration: 25 } }}
        className="absolute bottom-20 left-20 w-[500px] h-[500px] border border-zinc-800/30 rounded-full"
      ></motion.div>

      <div className="max-w-container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-20 sm:mb-32"
        >
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-2 h-2 rounded-full bg-white"
            ></motion.div>
            <span className="text-zinc-500 text-sm uppercase tracking-widest font-light">
              What I Do
            </span>
          </div>
          <h2 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-white tracking-tight leading-none">
            Services
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 50 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <motion.div
                whileHover={{ y: -10 }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  y: {
                    duration: 3 + index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className={`relative bg-zinc-800/30 backdrop-blur-sm border border-zinc-800 ${service.shape} p-8 sm:p-10 h-full overflow-hidden hover:border-white/20 transition-all duration-500`}
              >
                {/* Animated corner dot */}
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                  className={`absolute top-6 ${(index % 2 == 0) ? "right-6" : "left-6"} w-1.5 h-1.5 rounded-full bg-white`}
                ></motion.div>

                {/* Number */}
                <motion.div
                  className="mb-8 relative"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                >
                  <span className="text-8xl sm:text-9xl font-bold text-white/5 group-hover:text-white/10 transition-colors duration-500">
                    {service.number}
                  </span>
                </motion.div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:translate-x-2 transition-transform duration-500">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed group-hover:text-zinc-300 transition-colors duration-500">
                    {service.description}
                  </p>
                </div>

                {/* Hover line effect */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-white/0 via-white to-white/0 origin-left"
                ></motion.div>

                {/* Animated background gradient */}
                <motion.div
                  animate={{
                    opacity: [0, 0.05, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.4,
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-white to-transparent rounded-inherit"
                ></motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom floating text */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 sm:mt-32 text-center"
        >
          <motion.p
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-zinc-600 text-sm tracking-widest uppercase"
          >
            Scroll to explore more
          </motion.p>
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-px h-16 bg-gradient-to-b from-zinc-700 to-transparent mx-auto mt-8"
          ></motion.div>
        </motion.div> */}
      </div>
    </div>
  );
}

export default Services;
