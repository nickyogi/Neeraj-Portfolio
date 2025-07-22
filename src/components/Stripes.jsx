import React from 'react';
import Stripe from './Stripe';

function Stripes() {
  const ImageData = [
    {url:"/logoImages/stripeImage1.png", text: "Optimized "},
    {url:"/logoImages/stripeImage2.png", text: "Centralized"},
    {url:"/logoImages/stripeImage3.png", text: "Robust"},
    {url:"/logoImages/stripeImage4.png", text: "API-Driven"},
    {url:"/logoImages/stripeImage5.png", text: "Modular"},
    {url:"/logoImages/stripeImage6.png", text: "Secure"}
  ]

  return (
    <div className='flex items-center shrink-0 mt-12 w-full overflow-hidden'>
        <Stripe data={ImageData}/>
    </div>
  )
}

export default Stripes