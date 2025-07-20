import React from 'react';
import { motion } from 'framer-motion';

function Marquee({imgArr, direction}) {
  
  return (
    <div className="flex overflow-hidden mask-gradient">
      <motion.div 
       initial={{x : direction == "left" ? "0%" : "-100%" }}
       animate={{x : direction == "left" ? "-100%" : "0%"}}
       transition={{ repeat : Infinity, ease : 'linear', duration : 40 }} 
        className='flex flex-shrink-0 gap-10 py-5 pr-12'>
        {
        imgArr.map((item, index) => <img key={index} className='w-24 object-contain' src={item} alt="Brand Image" />)
        }       
      </motion.div>
      <motion.div 
       initial={{x : direction == "left" ? "0%" : "-100%" }}
       animate={{x : direction == "left" ? "-100%" : "0%"}}
       transition={{ repeat : Infinity, ease : 'linear', duration : 40 }} 
        className='flex flex-shrink-0 gap-10 py-5 pr-12'>
        {
        imgArr.map((item, index) => <img key={index} className='w-24 object-contain' src={item} alt="Brand Image" />)
        }       
      </motion.div>
    </div>
  )
}

export default Marquee