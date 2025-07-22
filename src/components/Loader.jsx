import React from "react";
import { motion } from "framer-motion";

export const Loader = ({text}) => {
  return (
    <section className="h-screen text-white w-full grid place-content-center">
      <FlipLink>{text}</FlipLink>
    </section>
  );
};

const DURATION = 0.5;
const STAGGER = 0.05;

const FlipLink = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      whileInView="inView"
      className="relative block overflow-y-hidden whitespace-nowrap text-8xl font-black uppercase sm:text-7xl md:text-8xl lg:text-[9rem]"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              inView: {
                y: "-100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              inView: {
                y: 0,
              },
              hovered: {
                y: "100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};