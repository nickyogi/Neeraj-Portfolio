import React from 'react';
import Stripe from './Stripe';

function Stripes() {
  const ImageData = [
    {url:"src/assets/images/stripeImage1.png", text: "Optimized "},
    {url:"src/assets/images/stripeImage2.png", text: "Centralized"},
    {url:"src/assets/images/stripeImage3.png", text: "Robust"},
    {url:"src/assets/images/stripeImage4.png", text: "API-Driven"},
    {url:"src/assets/images/stripeImage5.png", text: "Modular"},
    {url:"src/assets/images/stripeImage6.png", text: "Secure"}
  ]

  return (
    <div className='flex items-center shrink-0 mt-12 w-full overflow-hidden'>
        <Stripe data={ImageData}/>
    </div>
  )
}

export default Stripes