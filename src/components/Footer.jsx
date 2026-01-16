import React from 'react'
import { RevealLinks } from './RevealLinks'

function Footer() {
  return (
    <div className='w-full bg-inherit max-w-container mx-auto'>
        <div className=' max-w-6xl lg:max-w-7xl  mx-auto py-5 sm:flex gap-20 lg:gap-40'>
            <div className='sm:basis-1/2'>
                <h1 className='text-[10rem] lg:text-[12rem] text-white font-semibold leading-none tracking-tight'><RevealLinks text="Neeraj" /></h1>
            </div>
            <div className='basis-1/3 text-white flex px-5 sm:px-0 gap-5 sm:gap-10 lg:gap-16 pt-12 sm:pt-5'>
                <div className='flex flex-col'>
                    <h5 className='capitalize text-sm text-zinc-500 mb-8'>Socials</h5>
                    {
                        [
                            {name: "LinkedIn" , url: "https://www.linkedin.com/in/neeraj-kumar-yogi/"}, 
                            {name :"Twitter (X?)", url: "https://x.com/Socially_neeraj"},
                            {name: "GitHub", url: "https://github.com/nickyogi"}].map((item, index) => {
                            return <a key={index} href={item.url} target='_blank' className='my-1 hover:text-white text-sm text-zinc-500'>{item.name}</a>
                        })
                    }
                </div>
                <div className='flex flex-col'>
                    <h5 className='capitalize text-sm text-zinc-500 mb-8'>Sitemap</h5>
                    {
                        ["Home", "Skills", "Projects", "Contact"].map((item, index) => {
                            return <a key={index} href={(item == "Contact") ? "/contact" : `#${item}`} className='my-1 text-sm hover:text-purple-400 text-zinc-200'>{item}</a>
                        })
                    }
                </div>
                <div className='w-52 p-1 pb-2 text-zinc-200 flex flex-col gap-5 justify-end items-end '>
                    <p className='text-sm text-end font-semibold'>I’m a web developer who loves building fast, responsive, and visually engaging websites.</p>
                    <img src="/logoImages/footerImage.svg" alt="Error 404 : Not Found" className='h-7 object-contain ' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer