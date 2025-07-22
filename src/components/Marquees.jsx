import React from 'react'
import Marquee from './Marquee';

function Marquees() {
    var images = [
        [
          "/logoImages/marqueeLogo1.svg",
          "/logoImages/marqueeLogo2.svg",
          "/logoImages/marqueeLogo3.svg",
          "/logoImages/marqueeLogo4.svg",
          "/logoImages/marqueeLogo5.svg",
          "/logoImages/marqueeLogo6.svg",
          "/logoImages/marqueeLogo7.svg",
          "/logoImages/marqueeLogo8.svg",
          "/logoImages/marqueeLogo9.svg",
        ],
        [
            "/logoImages/marqueeLogo10.svg",
            "/logoImages/marqueeLogo11.svg",
            "/logoImages/marqueeLogo12.svg",
            "/logoImages/marqueeLogo13.svg",
            "/logoImages/marqueeLogo14.svg",
            "/logoImages/marqueeLogo15.svg",
            "/logoImages/marqueeLogo16.svg",
            "/logoImages/marqueeLogo17.svg",
            "/logoImages/marqueeLogo18.svg",
          ],
      ];
  return (
    <div className='py-32 bg-inherit w-full' >
        {images.map((elem, index) => {
            return <Marquee key={index} direction={ (index == 0) ? "left" : "right" } imgArr={elem} />
        })}
    </div>
  )
}

export default Marquees