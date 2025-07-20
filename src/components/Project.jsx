import React from 'react';
import Button from './Button';


function Project({val, count, mover, click}) {
  return (
    <div onMouseEnter={() => mover(count)} onClick={() => click(count)} className='group/projects w-full py-[2rem]'>
      <div className={`${val.hover} relative delay-100 duration-100 cursor-pointer`} >
      <div className={`
    absolute inset-0 z-0 transition-opacity duration-500 ease-in-out 
    ${val.isGradient ? "opacity-100" : "opacity-0"} 
    ${val.gradient}
  `}></div>
      <div className='max-w-6xl mx-auto h-[14rem] px-2 flex items-center justify-between relative'>
            <h1 className='text-[4vw] text-white' >{val.title}</h1>
            <div className='w-[28vw] text-white'>
                <p className='text-sm mb-5'>{val.description}</p>
                
                <div className="buttons flex gap-5">
                    { val.live && <a href={val.preview} target='_blank'><Button title="Live Website" /></a>}
                    { val.case && <a href={val.gitHub}  target='_blank'><Button title="More GitHub" /></a>}
                </div>
            </div>
        </div>
      </div>
    </div>
    
  )
}

export default Project