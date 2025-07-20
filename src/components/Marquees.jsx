import React from 'react'
import Marquee from './Marquee';

function Marquees() {
    var images = [
        [
          "src/assets/images/marqueeLogo1.svg",
          "src/assets/images/marqueeLogo2.svg",
          "src/assets/images/marqueeLogo3.svg",
          "src/assets/images/marqueeLogo4.svg",
          "src/assets/images/marqueeLogo5.svg",
          "src/assets/images/marqueeLogo6.svg",
          "src/assets/images/marqueeLogo7.svg",
          "src/assets/images/marqueeLogo8.svg",
          "src/assets/images/marqueeLogo9.svg",
        ],
        [
            "src/assets/images/marqueeLogo10.svg",
            "src/assets/images/marqueeLogo11.svg",
            "src/assets/images/marqueeLogo12.svg",
            "src/assets/images/marqueeLogo13.svg",
            "src/assets/images/marqueeLogo14.svg",
            "src/assets/images/marqueeLogo15.svg",
            "src/assets/images/marqueeLogo16.svg",
            "src/assets/images/marqueeLogo17.svg",
            "src/assets/images/marqueeLogo18.svg",
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