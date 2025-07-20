import React from 'react'

function Endlinks() {
  return (
    <div className='bg-inherit w-full'>
        <div className='flex gap-10 py-5 text-zinc-500 max-w-6xl mx-auto'>
        {
        ["Privacy Policy", "Cookie Policy", "Impressum", "Terms"].map((item,index) => <a href="/blank" key={index} className='capitalize text-sm font-semibold'>{item}</a> )
        }
        </div>
    </div>
  )
}

export default Endlinks