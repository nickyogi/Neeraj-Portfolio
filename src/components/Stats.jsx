import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

function AnimatedCounter({ end, duration = 2, suffix = "" }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, end, duration]);

  return (
    <span ref={nodeRef}>
      {count}
      {suffix}
    </span>
  );
}

function Stats() {
  const stats = [
    {
      id: 1,
      number: 50,
      suffix: "+",
      label: "Projects Completed",
    },
    {
      id: 2,
      number: 30,
      suffix: "+",
      label: "Happy Clients",
    },
    {
      id: 3,
      number: 3,
      suffix: "+",
      label: "Years Experience",
    },
    {
      id: 4,
      number: 15,
      suffix: "+",
      label: "Technologies Mastered",
    },
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="w-full px-5 sm:px-12 lg:px-24 py-16 bg-zinc-900 relative overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Top decorative line */}
        <motion.div
          variants={lineVariants}
          className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent mb-16 sm:mb-20 origin-left"
        ></motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              className="group relative"
            >
              {/* Vertical accent line */}
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="absolute left-0 top-0 w-[2px] bg-gradient-to-b from-white to-transparent origin-top"
              ></motion.div>

              {/* Content */}
              <div className="pl-6 sm:pl-8">
                {/* Number */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="text-6xl sm:text-7xl lg:text-8xl font-black mb-3 text-white"
                >
                  <AnimatedCounter
                    end={stat.number}
                    duration={2.5}
                    suffix={stat.suffix}
                  />
                </motion.div>

                {/* Label */}
                <p className="text-zinc-400 text-sm sm:text-base font-medium tracking-wide uppercase">
                  {stat.label}
                </p>

                {/* Animated dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className="w-2 h-2 rounded-full mt-4 bg-white group-hover:scale-150 transition-transform duration-300"
                ></motion.div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute -inset-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10 bg-white/5"
              ></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative line */}
        <motion.div
          variants={lineVariants}
          className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent mt-16 sm:mt-20 origin-right"
        ></motion.div>
      </motion.div>
    </div>
  );
}

export default Stats;
