import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"
import { useParams } from "react-router-dom"
import Shimmer from "./Utilities/Shimmer"
import useMenu from "./Utilities/useMenu"
import ShowingCategories from "./ShowingCategories"
import { toast } from "react-toastify"

const RestaurantMenu=()=>{
    
    const code = useParams()
    const path = Object.values(code)[0]
    // const restaurantId = code.split('/').pop();

    // const [redata,setredata]= useState(null)
    const redata= useMenu(path)

    const dummydata= redata?.page_data?.order?.menuList?.menus[0]        

    // setredata(j)
    const [menu,setmenu]= useState(null)

    if (redata===null){
        return <Shimmer/>
    }

    
    const showmodal=(props)=>{
        setmenu(props)
        
    }

    return(   
        <div className=" overflow-hidden pt-0 p-4 mx-10 z-10  border-black ">

            <h1 className="text-center border-l-slate-950 font-extrabold">{redata.page_info.pageTitle} Restaurant menu</h1><hr></hr>
            <div className="flex    w-full
             p-6">
                <div className="flex flex-col gap-2 overflow-y-scroll ">
                    {redata.page_data?.order?.menuList?.menus.map((ele ,item)=>(
                        
                        <div style={{ }} className="cursor-pointer " onClick={()=>{showmodal(ele)} } >
                            <h2 style={{color: menu?.menu?.id===ele?.menu?.id ? 'red':'black' ,background: menu?.menu?.id===ele?.menu?.id ? 'linear-gradient(90deg, rgb(255, 255, 255), rgb(255, 237, 239))':'white'}} className="font-semibold rounded-md p-2 w-full" >{ele.menu.name}</h2>
                            {/* <img className='size-32'  src = {ele.menu.categories[0].category.items[0].item.item_image_url}></img> */}
                            <hr></hr>
                            
                            
                        </div>
                        
                    ))}
                </div>
                <div className="flex-shrink-0 overflow-y-scroll">
                    <ShowingCategories props={menu||dummydata} />
                </div>



            </div>
        </div>
    )
}
export default RestaurantMenu