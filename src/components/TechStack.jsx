import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function TechStack() {
  const caseStudies = [
    {
      id: 1,
      title: "VIRTUAL GYM EXPERIENCE SHOWCASE",
      tags: ["UX Research", "Mobile App Design", "Prototyping"],
    },
    {
      id: 2,
      title: "ELECTRIC MOBILITY EXPERIENCE",
      tags: ["UX Research", "App Interface Design", "Prototyping"],
    },
    {
      id: 3,
      title: "TROPICAL ESCAPE IDENTITY",
      tags: ["Brand Identity", "Art Direction", "Digital Experience"],
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div ref={ref} className="w-full px-5 sm:px-12 lg:px-24 py-20 sm:py-32 bg-zinc-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Animated background dot */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-20 w-64 h-64 rounded-full bg-white blur-3xl"
        ></motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-24"
        >
          <div className="flex items-baseline justify-between flex-wrap gap-8">
            <div>
              <span className="text-zinc-600 text-xs uppercase tracking-[0.3em] font-light block mb-4">
                (03 Projects)
              </span>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tight leading-none">
                Featured Work
              </h2>
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-zinc-800 flex items-center justify-center"
            >
              <div className="w-2 h-2 rounded-full bg-white"></div>
            </motion.div>
          </div>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="space-y-8 sm:space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 60 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }
              }
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
                className="relative border border-zinc-800 group-hover:border-zinc-700 transition-colors duration-500 overflow-hidden"
                style={{
                  marginLeft: index % 2 === 0 ? '0' : 'auto',
                  marginRight: index % 2 === 0 ? 'auto' : '0',
                  maxWidth: index % 2 === 0 ? '85%' : '90%',
                }}
              >
                {/* Index Number - Top Corner */}
                <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-10">
                  <motion.span
                    animate={{
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.4,
                    }}
                    className="text-sm font-mono text-zinc-600 group-hover:text-white transition-colors duration-500"
                  >
                    [{String(study.id).padStart(2, '0')}]
                  </motion.span>
                </div>

                {/* Main Content Area */}
                <div className="p-8 sm:p-12 lg:p-16 min-h-[300px] sm:min-h-[400px] flex flex-col justify-between">
                  {/* Title Section */}
                  <div>
                    <motion.h3
                      className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6 sm:mb-8 max-w-4xl"
                    >
                      {study.title}
                    </motion.h3>
                  </div>

                  {/* Bottom Section - Tags and Arrow */}
                  <div className="flex items-end justify-between gap-8">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-3 sm:gap-4">
                      {study.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          initial={{ opacity: 0, y: 10 }}
                          animate={
                            isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                          }
                          transition={{ delay: index * 0.2 + tagIndex * 0.1 }}
                          className="text-xs sm:text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors duration-500 uppercase tracking-wider border border-zinc-800 group-hover:border-zinc-600 px-3 py-1.5 rounded-full"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Arrow Icon */}
                    <motion.div
                      className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-zinc-800 group-hover:border-white flex items-center justify-center transition-all duration-500"
                      whileHover={{ scale: 1.1, rotate: -45 }}
                    >
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-600 group-hover:text-white transition-colors duration-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent"></div>
                </div>

                {/* Animated Corner Accent */}
                <motion.div
                  className="absolute bottom-0 left-0 w-px h-0 group-hover:h-20 bg-white transition-all duration-700"
                ></motion.div>
                <motion.div
                  className="absolute bottom-0 left-0 w-0 h-px group-hover:w-20 bg-white transition-all duration-700"
                ></motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechStack;
