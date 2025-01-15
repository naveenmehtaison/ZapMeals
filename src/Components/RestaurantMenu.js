import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"
import { useParams } from "react-router-dom"
import Shimmer from "./Utilities/Shimmer"
import useMenu from "./Utilities/useMenu"
import ShowingCategories from "./Utilities/ShowingCategories"

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
        <div className="  pt-0 p-4 mx-10 z-10  border-black ">
            <h1>RestarantMenu</h1>
            <h1 className="text-center border-l-slate-950 font-extrabold">{redata.page_info.pageTitle}Restaurant amenu</h1><hr></hr>
            <div className="flex  gap-40 p-16 justify-between w-[50px]
             p-6">
                <div className="flex flex-col  gap-20">
                    {redata.page_data?.order?.menuList?.menus.map((ele ,item)=>(
                        <div className="cursor-pointer  bg-white active:bg-yellow-400 focus:bg-yellow-500" onClick={()=>{showmodal(ele)} } >
                            <h2 className="font-semibold" >{ele.menu.name}</h2>
                            {/* <img className='size-32'  src = {ele.menu.categories[0].category.items[0].item.item_image_url}></img> */}
                            <hr></hr>
                            
                            
                        </div>
                        
                    ))}
                </div>
                <div className="flex-shrink-0">
                    <ShowingCategories props={menu||dummydata} />
                </div>



            </div>
        </div>
    )
}
export default RestaurantMenu