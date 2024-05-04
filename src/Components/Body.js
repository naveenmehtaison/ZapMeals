import Restaurant_Card from "./Restaurant_card"
import { obj } from "./Utilities/mockdata"
import { useState,useEffect } from "react"
const Body=()=>{
    const [resdata,setresdata]=useState(obj)

    return(
        <>
            <div>
                <div>
                    <button onClick={()=>{const filter_data = resdata.filter((ele,item)=>(
                        ele.info.avgRating>4))
                        setresdata(filter_data)}}>Good Restaurants</button>
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