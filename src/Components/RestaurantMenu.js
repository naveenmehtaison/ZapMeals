import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"
import { useParams } from "react-router-dom"
import Shimmer from "./Utilities/Shimmer"
import useMenu from "./Utilities/useMenu"
import ShowingCategories from "./Utilities/ShowingCategories"

const RestaurantMenu=()=>{
    const [menu,setmenu]= useState('')
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
    const showmodal=(props)=>{
        setmenu(props)
    }
    return(   
        <>
            <h1 className="text-center border-l-slate-950 font-extrabold">{redata.page_info.pageTitle}</h1><hr></hr>
            <div className="flex flex-row gap-80 p -16 justify-between w-full p-6">
                <div className="flex flex-col gap-20">
                    {redata.page_data?.order?.menuList?.menus.map((ele ,item)=>(
                        <div className="cursor-pointer  bg-white active:bg-yellow-400 focus:bg-yellow-500" onClick={()=>{showmodal(ele)} } >
                            <h2 >{ele.menu.name}</h2>
                            {/* <img className='size-32'  src = {ele.menu.categories[0].category.items[0].item.item_image_url}></img> */}
                            <hr></hr>
                            
                            
                        </div>
                        
                    ))}
                </div>
                <div className="flex-shrink-0">
                    <ShowingCategories props={menu} />
                </div>



            </div>
        </>
    )
}
export default RestaurantMenu