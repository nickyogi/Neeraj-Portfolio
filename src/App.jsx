import React, { lazy, Suspense, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Loader } from "./components/Loader";
import { useState } from "react";
import { motion } from "framer-motion";

const Home = lazy(() => import("./components/Home"));
const Contact = lazy(() => import("./components/Contact"));
const CursorFollower = lazy(() => import("./components/CursorFollower"));

function App() {
  const [loaderVisiability, setLoaderVisiability] = useState(true);

  (function () {
    setTimeout(() => {
      setLoaderVisiability(false);
    }, 4000);
  })();

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div className={loaderVisiability ? "h-screen w-screen overflow-hidden" : ""}>
      <CursorFollower>
        <motion.div
          className="h-full w-full z-50 absolute bg-[#18181b]"
          initial={{ y: 0 }} // start fully visible
          animate={{ y: "-100%" }} // after 3s, slide up
          transition={{ duration: 0.8, ease: "easeInOut", delay: 3 }} // smooth animation
        >
          {loaderVisiability ? <Loader text="Hello !" /> : ""}
        </motion.div>
        <div className="w-full mx-auto">
          <Suspense fallback="Loading">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </div>
      </CursorFollower>
    </div>
  );
}

export default App;
