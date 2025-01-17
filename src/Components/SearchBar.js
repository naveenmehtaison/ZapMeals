import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { filterdata } from '../Redux/createslice'
// import {fasearch}
const SearchBar = () => {
  const dispatch = useDispatch()
  const [searchvalue,setsearchvalue] =useState('')

  const resdata = useSelector((state)=>state.cart.products)
  useEffect(()=>{
    dispatch(filterdata(searchvalue))

  },[searchvalue])

  return (
    <div className="flex ">

    <div className="">
        <input  placeholder="🔍 Search Food" className='text-lg w-80 rounded-lg pl-2'  value={searchvalue} onChange={(e)=>{setsearchvalue(e.target.value)}}></input>
        {/* <button className=" ml-2 mt-[-1px] p-1 items-center text-lg  rounded-md hover:bg-green-700 text-white" onClick={()=>{
          
          // const newdata= obj.filter((ele,item)=>(

          //   ele.info.name.toLowerCase().includes(searchvalue.toLowerCase())
            // searchvalue.toLowercase().includes(ele.info.name.toLowerCase())
            // dispatch()
            
        

        // searchvalue.length==0?setresdata(obj):setresdata(newdata)
        }
        }>🔍</button> */}
    </div>
    {/* <div>
        <button onClick={()=>{const filter_data = resdata.filter((ele,item)=>(
            ele.info.rating.rating_text>4))
            setresdata(filter_data)}}>above 4 Stars</button>
    </div> */}

</div>
  )
}

export default SearchBar