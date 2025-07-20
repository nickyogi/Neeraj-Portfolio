import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

function Button({ title = "Let's Connect" }) {
  return (
    <button className="group relative w-32 px-4 bg-zinc-100 h-8 text-xs text-black rounded-full flex items-center justify-between font-medium overflow-hidden">
      
      {/* Text sliding container */}
      <div className="relative w-full h-full overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start transition-all duration-300 ease-out group-hover:-translate-y-full">
          {title}
        </div>
        <div className="absolute top-full left-0 w-full h-full flex items-center justify-start transition-all duration-300 ease-out delay-400 group-hover:translate-y-[-100%]">
          {title}
        </div>
      </div>

      {/* Static arrow */}
      <FaArrowRightLong className="text-[18px]" />
    </button>
  );
}

export default Button;
