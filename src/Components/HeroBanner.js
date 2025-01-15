import React from 'react'
import { Fragment } from 'react'
import heroimg from "../Assests/heroimage.png"
import heroimg2 from "../Assests/download__1_-removebg-preview.png"
const HeroBanner = () => {
  return (
    <div className='bg-yellow-300 bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700  w-full h-96 m-2 relative flex '>
        <div className='absolute left-24  mt-24' >
        <h2 className='text-white font-bold text-5xl text-center '  >Are You Starving?</h2>
        <h6 className='mt-2 text-slate-500'>Your Favourite Food Just A Click Away</h6>
        <button className='text-white bg-slate-700 p-2 mt-2 rounded-lg '>Order Now</button>
        </div>
        <img className='absolute size-96 w-[60rem] right-[-4rem]' src={heroimg} />

        

        
    </div>
  )
}

export default HeroBanner