import React from 'react'
import { useDispatch } from 'react-redux'
import { setcart,delfromcart, login } from '../../Redux/createslice'
import { decfromcart,incfromcart } from '../../Redux/createslice'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaShippingFast } from 'react-icons/fa'
import { RiBillLine } from "react-icons/ri";

function Cart() {
    // const [totalamount,settotalamount]= useState(0)
    const navigate = useNavigate()
    const Login = useSelector(state=>state.cart.login)

    const Dispatch = useDispatch()
    const Cartitem = useSelector(state=>state.cart.cart)
    const Totalamount = useSelector(state=>state.cart.totalprice)

    const Handledel=(ele)=>{
      Dispatch(delfromcart(ele))
    }
    const incre=(ele)=>{
      Dispatch(incfromcart(ele))
    }
    const decre=(ele)=>{
      Dispatch(decfromcart(ele))
    }

  return (
    <div className='bg-gray-200  rounded-md mt-2 w-[340px] h-full overflow-y-auto absolute z-10  right-0' >
        <div className='flex p-3 justify-between w-full bg-white'>
            <h1 className='font-extrabold' >My Cart</h1>
            <button onClick={()=>Dispatch(setcart())}> X</button>   
        </div>

        
          {Cartitem.length==0?
              <div className='bg-white w-full h-0'>
              <h1 className='font-bold'>Empty Cart</h1>
              </div>:
          <>
          <div className='bg-white shadow-xl m-4 rounded-md'>
            {Cartitem.map((ele,item)=>(
                // { const price = totalamount + ele.item.default_price
                //   settotalamount(price)}
              
              (
                <div className='flex  justify-between m-2 p-2' key={ele.item.id}>
                  <img className='size-20 p-2'  src={ele.item.item_image_url}></img>
                  <p className='w-30 overflow-hidden text-wrap text-ellipsis'>{ele.item.name}</p>
                  <p>Rs.{ele.item.default_price}</p>
                  <p> X {ele.quantity}</p>

                  <button onClick={(e)=>Handledel(ele)}>🗑️Remove</button>
                  <button onClick={()=>(incre(ele))}>➕</button>
                  <button onClick={()=>(decre(ele))}>➖</button>
                
                </div>
              )
            ))}
            </div>
            <div className='m-4 p-2 justify-around shadow-2xl rounded-md w-auto h-auto border-spacing-24 border-black bg-white'>
              
              <h2 className=' text-center font-bold'> Bill details</h2>
              <hr className='bg-black'></hr>
              <div className='flex justify-between items-center'>
                <p className='flex items-center gap-2'><RiBillLine/> Items Total </p>
                <p>: {Totalamount}</p>
              </div>
              <div className='flex justify-between items-center'>
                <p className='flex items-center gap-2' > <FaShippingFast/>  Deleivery charges </p>
                <p>:50</p>
              </div>
              <div className='flex justify-between'>
                <p>Grand Total</p>
                <p>:{Totalamount+50}</p>
              </div>

              
            </div>
            <div className='bg-white shadow-xl m-4 rounded-md p-2'>
              <h2 className=' font-bold text-center'> Cancellation Policy</h2>
              <p className='font-thin' >Orders cannot be cancelled once packed for delivery. In case of unexpected delays, a refund will be provided, if applicable.</p>

            </div>
          </>}
          {!Login && 
            <div onClick={()=>{navigate('/login')}} className=' p-4 bg-black m-6 rounded-md'>
              <h1 className='text-green-600 ml-7'>LOG IN TO PLACE ORDER</h1>
            
            </div>
          }
          <div></div>

          

    </div>
  )
}

export default Cart