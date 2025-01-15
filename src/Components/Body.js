import axios from "axios"
import Restaurant_Card,{Restaurant_Card_special} from "./Restaurant_card"
import { obj } from "./Utilities/mockdata"
import { useState,useEffect } from "react"
import Shimmer from "./Utilities/Shimmer"
import { useContext } from "react"
import DataContext from "./Store/auth-context"
import StoreContext from "./Store/StoreContext"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import Cart from "./Pages/Cart"
import HeroBanner from "./HeroBanner"
const Body=()=>{
    const dispatch = useDispatch
    const newdata =  useSelector((state)=>state.searchbar.products)||[]

    const [resdata,setresdata] = useState(newdata)
    useEffect(()=>{
        setresdata(Array.isArray(newdata)?newdata:[])


    },[newdata])
    
    const Ctx = useContext(DataContext)

    
    const {} = obj
    const [livedata,setlivedata]= useState(obj)
    const [searchvalue, setsearchvalue]= useState('')

    const Promoted_card = Restaurant_Card_special(Restaurant_Card)



    return resdata==null?(
        <Shimmer/>
    ):(
        <>
        <HeroBanner/>

            {/* <div className="p-6 flex items-center gap-6">

                <div className="ml-14">
                    <input placeholder="Search Food" value={searchvalue} onChange={(e)=>{setsearchvalue(e.target.value)}}></input>
                    <button className="bg-green-300 m-2 p-2 items-center  rounded-md hover:bg-green-700 text-white" onClick={()=>{const newdata= obj.filter((ele,item)=>(

                        ele.info.name.toLowerCase().includes(searchvalue.toLowerCase())
                        // searchvalue.toLowercase().includes(ele.info.name.toLowerCase())
                        
                    ))
 
                    searchvalue.length==0?setresdata(obj):setresdata(newdata)
                    }
                    }>Search</button>
                </div>
                <div>
                    <button onClick={()=>{const filter_data = resdata.filter((ele,item)=>(
                        ele.info.rating.rating_text>4))
                        setresdata(filter_data)}}>above 4 Stars</button>
                </div>

            </div> */}
            <div  className="flex flex-wrap  gap-12 justify-center">
                {resdata.map((restaurant)=>(
                    <>
                        {restaurant.isPromoted?(
                           
                            <Promoted_card key={restaurant.info.resId} props = {restaurant}/>
                        ):
                        <Restaurant_Card key={restaurant.info.resId} props = {restaurant}  />}
                    </>
                ))}
                
            </div>
        </>
    )
}
export default Body