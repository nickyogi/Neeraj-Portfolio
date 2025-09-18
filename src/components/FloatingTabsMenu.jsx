import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingTabsMenu = ({ code, projectsActive }) => {
  const [open, setOpen] = useState(false);

  const tabs = ["Home", "Skills", "Projects"];

  const containerVariants = {
    closed: {
      height: 40,
      width: 40,
      // borderRadius: "9999px",
      transition: { type: "spring", duration: 0.5 },
    },
    open: {
      height: "auto",
      width: 320,
      borderRadius: "1rem",
      transition: { type: "spring", duration: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 }, // animate from above
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.05 * i },
    }),
    exit: { opacity: 0, y: -20 },
  };

  return (
    <motion.div
      variants={containerVariants}
      animate={open ? "open" : "closed"}
      initial="closed"
      className="absolute max-w-32 top-24 left-4 bg-zinc-900 shadow-xl overflow-hidden text-white z-40 sm:hidden "
    >
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="sm:w-full flex items-center justify-center p-1 z-50 hover:bg-zinc-900 transition"
      >
        {open ? (
          // Up arrow (close)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 z-50"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 8.3685L3.03212 13.1162L3.9679 14.8838L12 10.6315L20.0321 14.8838L20.9679 13.1162L12 8.3685Z" />
          </svg>
        ) : (
          // Home icon (open)
          <div className="relative animate-pulse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM6 19H18V9.15745L12 3.7029L6 9.15745V19Z" />
            </svg>
          </div>
        )}
      </button>

      {/* Tab Links */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="px-4 pb-4 pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-center flex-wrap gap-3"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {tabs.map((item, index) => {
              if (item === "") {
                return (
                  <motion.span
                    key={index}
                    className="w-[1px] h-5 bg-zinc-500 inline-block"
                    custom={index}
                    variants={itemVariants}
                  />
                );
              }

              const isActive = index === code;
              const isProject = index === 2;

              return (
                <motion.a
                  key={index}
                  href={`#${item}`}
                  custom={index}
                  variants={itemVariants}
                  className={`relative px-3 py-1 rounded text-sm transition-all
                    ${
                      isProject
                        ? projectsActive
                          ? "bg-gradient-to-br from-purple-500 to-purple-800 border border-purple-600"
                          : "bg-zinc-800 border border-zinc-700"
                        : ""
                    }`}
                >
                  {isProject && (
                    <span
                      style={{ boxShadow: "0 0 0.8em #0efc26" }}
                      className="absolute -right-1 -top-1 w-2 h-2 bg-white rounded-full animate-ping"
                    />
                  )}
                  {isActive && (
                    <span
                      style={{ boxShadow: "0 0 0.8em #0efc26" }}
                      className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse mr-1"
                    />
                  )}
                  {item}
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FloatingTabsMenu;
