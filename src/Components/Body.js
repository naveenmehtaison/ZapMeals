import axios from "axios"
import Restaurant_Card from "./Restaurant_card"
import { obj } from "./Utilities/mockdata"
import { useState,useEffect } from "react"
const Body=()=>{
    const [resdata,setresdata]=useState(obj)
    const [searchvalue, setsearchvalue]= useState('')
    // async function callback(){
    //     const response = await axios.get('https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667')
    //     console.log(response.info,'mmmmmmm')
    //     setresdata(response.info)
    // }
    // useEffect(()=>{ callback()},[])
    // console.log('hoii',resdata)

    return(
        <>
            <div className="filter">
                <div>
                    <button onClick={()=>{const filter_data = resdata.filter((ele,item)=>(
                        ele.info.avgRating>4))
                        setresdata(filter_data)}}>above 4 Stars</button>
                </div>
                <div>
                    <input placeholder="Search Food" value={searchvalue} onChange={(e)=>{setsearchvalue(e.target.value)}}></input>
                    <button onClick={()=>{const newdata= obj.filter((ele,item)=>(
                        // console.log(ele.info.name.toLowerCase(),searchvalue)
                        ele.info.name.toLowerCase().includes(searchvalue.toLowerCase())
                        // searchvalue.toLowercase().includes(ele.info.name.toLowerCase())
                        
                    ))
                    console.log(newdata)
                    searchvalue.length==0?setresdata(obj):setresdata(newdata)
                    }
                    }>Search</button>
                </div>

            </div>
            <div style={{marginLeft:'0px'}} className='res-container'>
                {resdata.map((restaurant)=>(
                    <Restaurant_Card key={restaurant.info.id} props = {restaurant.info}/>
                ))}
                
            </div>
        </>
    )
}
export default Body