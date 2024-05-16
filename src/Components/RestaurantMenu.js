import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"
import { useParams } from "react-router-dom"
import Shimmer from "./Utilities/Shimmer"
import useMenu from "./Utilities/useMenu"
const RestaurantMenu=()=>{
    const code = useParams()
    const path = Object.values(code)[0]
    // const restaurantId = code.split('/').pop();
    console.log(path)
    // const [redata,setredata]= useState(null)
    const redata= useMenu(path)
    console.log(redata)
    // setredata(j)
    if (redata===null){
        return <Shimmer/>
    }
    return(   
        <>
            <h1 className="header">{redata.page_info.pageTitle}</h1>

            {redata.page_data?.order?.menuList?.menus.map((ele ,item)=>(
                <div>
                    <h2>{ele.menu.name}</h2>
                    <img className='res-card'  src = {ele.menu.categories[0].category.items[0].item.item_image_url}></img>
                    <hr></hr>
                </div>
            ))}


        </>
    )
}
export default RestaurantMenu