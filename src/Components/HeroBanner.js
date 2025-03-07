import React from 'react'

import heroimg from "../Assests/flat-lay-table-full-delicious-food-composition.png"

const HeroBanner = () => {
  return (
    <div className='flex-col sm:flex-row  bg-yellow-300 bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700  w-full h-[400px] sm:h-96 my-2 relative flex '>
        <div className=' absolute z-20 mt-20 items-center ml-6  sm:mt-24' >
        <h2 className='text-white font-bold text-5xl text-center '  >Are You Starving?</h2>
        <h6 className='mt-2 text-white sm:text-slate-500 text-center my-2 sm:text-left'>Your Favourite Food Just A Click Away</h6>
        <button className='text-white bg-slate-700 p-2 w-32 mt-2 rounded-lg mx-[30%] sm:mx-0  '>Order Now</button>
        </div>
        <img alt='herobanner' className='absolute z-10   size-96 my-2 w-[34rem] sm:[30rem] md:w-[40rem]  lg:w-[48rem]  sm:m-0 sm:right-[0.8rem]' src={heroimg} />

        

        
    </div>
  )
}

export default HeroBanner