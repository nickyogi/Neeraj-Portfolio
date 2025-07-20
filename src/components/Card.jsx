import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Card({ width, head, para, hover, padding, smHead, bigHead }) {
  return (
    <div className={`${width} bg-zinc-800 rounded-xl p-5 ${hover} group`}>
      <div className={`${padding} min-h-[26rem] flex flex-col justify-between`}>
        <div className="top w-full">
          <div className='up flex justify-between items-center text-white'>
            <h3 className='capitalize text-zinc-300 text-sm md:text-base'>{smHead}</h3>
            <FaArrowRightLong />
          </div>
          <div className='text-2xl md:text-3xl mt-5 text-zinc-200 w-full md:w-64'>
            {bigHead}
            {!head && (
              <p className='text-xs mt-6 opacity-0 group-hover:opacity-100 duration-500'>
                I’m a full-stack web developer specializing in the MERN stack (MongoDB, Express, React, Node.js). I love building fast, responsive, and visually engaging web applications — from sleek portfolios to dynamic, data-driven platforms. My focus is on clean design, smooth interactions, and intuitive user experiences. Whether it's crafting RESTful APIs, architecting scalable backends, or bringing interfaces to life with React, I enjoy turning ideas into full-featured, polished digital products that people love to use.
                    
              </p>
            )}
          </div>
        </div>
        <div className="bottom w-full mt-6">
          {head && (
            <>
              <h3 className='text-3xl md:text-[5rem] text-zinc-100 font-semibold my-4 leading-tight'>
                Get Your Project
              </h3>
              <button className='px-4 py-2 rounded-full border border-zinc-300 text-zinc-300 hover:text-purple-500 hover:font-bold hover:bg-zinc-100 capitalize'>
                <Link to="/contact">Contact Us</Link>
              </button>
            </>
          )}
          {para && (
            <p className='text-sm text-zinc-500'>Explore what drives our team</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
