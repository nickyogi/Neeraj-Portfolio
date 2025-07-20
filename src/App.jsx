import React from 'react';
import Contact from './components/Contact';
import CursorFollower from "./components/CursorFollower";
import LocomotiveScroll from 'locomotive-scroll';
import './App.css';
import Home from './components/Home';
import { Routes,Route } from 'react-router-dom';



function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
    {/* <div className="relative h-screen"> */}
      {/* <CursorFollower /> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    {/* </div> */}
    </>
  )
}

export default App