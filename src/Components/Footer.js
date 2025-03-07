import React from 'react'
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialFacebook } from 'react-icons/ti';
import { TiSocialLinkedin } from 'react-icons/ti';
import { TiPhone } from 'react-icons/ti';
import { MdMailOutline } from "react-icons/md";
const Footer = () => {
  return (
    <div className=' mx-2 h-full rounded-sm  bg-slate-700 '>
        <div className='flex m-4 sm:mx-20 p-4 space-x-14 sm:space-x-96 flex-row text-lg text-white justify-evenly'>
            <div className='flex flex-col '>
                <h1 className='font-extrabold ' >
                    Contact
                </h1>
                <hr className='mb-2' ></hr>
                 <p className=' flex gap-2'> <MdMailOutline className=' mt-1.5'/>email</p>
                <p className='flex gap-2'> <TiPhone className='gap-2 mt-1.5'/>Phone</p>
                <p className='flex gap-2'><TiSocialInstagram className=' mt-1.5'/>Insta</p>

            </div>
            <div className='sm:flex flex-col max-w-96   '>

                <h1 className='font-extrabold m-auto ' >
                    About
                </h1>
                <hr className='mb-2' ></hr>
                <p className='text-md' >BhookLagiHai is a food deleivery company with over 500+ stores all over india. Which includes wide range of cuisine varieties indian to continental. Proudly Made In India❤️</p>
                

            </div>

            <div className='hidden sm:flex text-white flex-col ' style={{marginRight:'2.75rem'}}>
                <h1 className='font-extrabold '>Info</h1>
                <hr className='mb-2' ></hr>

            </div> 

        </div>

    </div>
  )
}

export default Footer