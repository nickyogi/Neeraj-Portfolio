import React, { lazy, Suspense, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Loader } from "./components/Loader";

const Home = lazy(() => import("./components/Home"));
const Contact = lazy(() => import("./components/Contact"));
const CursorFollower = lazy(() => import("./components/CursorFollower"));

function App() {
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
    <>
      <CursorFollower>
        <Suspense fallback={<Loader text="Hello !" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </CursorFollower>
    </>
  );
}

export default App;
