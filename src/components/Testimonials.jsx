import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonialsData = [
  {
    id: 1,
    name: "Daniel Carter",
    role: "Founder of Flowbit",
    avatar: "DC",
    content: "Joe transformed our concept into a product that's intuitive and visually striking. His attention to detail is unmatched.",
  },
  {
    id: 2,
    name: "Michael Reeves",
    role: "PM at NexaLabs",
    avatar: "MR",
    content: "Working with Joe was incredible. He delivered beyond expectations with a perfect blend of creativity and technical expertise.",
  },
  {
    id: 3,
    name: "Sarah Mitchell",
    role: "CEO at TechVision",
    avatar: "SM",
    content: "The level of professionalism and skill Joe brings is outstanding. Our platform has never looked better or performed smoother.",
  },
  {
    id: 4,
    name: "Alex Thompson",
    role: "Designer at CreativeCo",
    avatar: "AT",
    content: "Joe's work ethic and innovative approach made our collaboration seamless. The results speak for themselves - absolutely phenomenal.",
  },
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="w-full px-5 sm:px-12 lg:px-24 py-20 sm:py-32 bg-zinc-900">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-4xl sm:text-5xl font-bold text-white/30">
              66
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              TESTIMONIALS
            </h2>
          </div>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Hear from those who've experienced Joe's design expertise firsthand.
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div variants={itemVariants} className="relative">
          <div className="bg-zinc-800/30 border border-zinc-700/50 rounded-3xl p-6 sm:p-8 lg:p-12 backdrop-blur-sm">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Side - Avatars */}
              <div className="flex justify-center lg:justify-start gap-4">
                <AnimatePresence mode="wait">
                  {[activeIndex, (activeIndex + 1) % testimonialsData.length].map((idx, i) => (
                    <motion.div
                      key={testimonialsData[idx].id}
                      initial={{ opacity: 0, x: i === 0 ? -50 : 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: i === 0 ? -50 : 50 }}
                      transition={{ duration: 0.5 }}
                      className="relative"
                    >
                      <div className="w-32 h-40 sm:w-40 sm:h-48 rounded-2xl border border-zinc-800 bg-zinc-900 flex flex-col items-center justify-center p-4">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/10 flex items-center justify-center mb-3">
                          <span className="text-2xl sm:text-3xl font-bold text-white">
                            {testimonialsData[idx].avatar}
                          </span>
                        </div>
                        <h4 className="text-white font-semibold text-sm text-center">
                          {testimonialsData[idx].name}
                        </h4>
                        <p className="text-zinc-500 text-xs text-center mt-1">
                          {testimonialsData[idx].role}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Right Side - Content */}
              <div className="relative">
                {/* Quote Icon */}
                <div className="text-white/10 mb-6">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Testimonial Text */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="text-white text-lg sm:text-xl lg:text-2xl font-medium mb-8 leading-relaxed">
                      {testimonialsData[activeIndex].content}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={handlePrev}
                    className="p-3 rounded-full bg-zinc-800 border border-zinc-700 hover:border-white hover:bg-zinc-700 transition-all duration-300 group"
                  >
                    <svg className="w-5 h-5 text-zinc-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-white font-bold text-lg">Next</span>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>

                  <button
                    onClick={handleNext}
                    className="p-3 rounded-full bg-white hover:bg-zinc-200 transition-all duration-300 transform hover:scale-110"
                  >
                    <svg className="w-5 h-5 text-zinc-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Quote Number */}
          <div className="absolute -top-8 -left-4 text-8xl font-bold text-white/5 hidden lg:block">
            66
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Testimonials;
