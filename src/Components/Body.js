import axios from "axios"
import Restaurant_Card,{Restaurant_Card_special} from "./Restaurant_card"
import { obj } from "./Utilities/mockdata"
import { useState,useEffect } from "react"
import Shimmer from "./Utilities/Shimmer"
import { useContext } from "react"
import DataContext from "./Store/auth-context"
import StoreContext from "./Store/StoreContext"
const Body=()=>{
    const Ctx = useContext(DataContext)
    console.log(Ctx.name)
    const [resdata,setresdata]=useState(obj)
    const [livedata,setlivedata]= useState(obj)
    const [searchvalue, setsearchvalue]= useState('')
    // async function callback() {
    //     try {
    //         const response = await axios.get('https://www.zomato.com/webroutes/getPage?page_url=/ncr')
    //         const m =  response.data.page_data.sections.SECTION_SEARCH_RESULT
    //         setresdata(m.slice(1))
    //     } catch (error) {
    //         console.error('Error:', error.message); // Log the error message
    //     }
    // }
    
    // useEffect(()=>{ callback()},[])
    console.log('livedata',livedata)
    console.log('resdata',resdata)
    const Promoted_card = Restaurant_Card_special(Restaurant_Card)

    console.log('hoii',resdata[0].isPromoted)

    return resdata==null?(
        <Shimmer/>
    ):(
        <>
          {console.log(resdata)}
            <div className="p-6 flex items-center gap-4">

                <div>
                    <input placeholder="Search Food" value={searchvalue} onChange={(e)=>{setsearchvalue(e.target.value)}}></input>
                    <button className="bg-green-300 m-2 p-2" onClick={()=>{const newdata= obj.filter((ele,item)=>(
                        // console.log(ele.info.name.toLowerCase(),searchvalue)
                        ele.info.name.toLowerCase().includes(searchvalue.toLowerCase())
                        // searchvalue.toLowercase().includes(ele.info.name.toLowerCase())
                        
                    ))
                    console.log(newdata)
                    searchvalue.length==0?setresdata(obj):setresdata(newdata)
                    }
                    }>Search</button>
                </div>
                <div>
                    <button onClick={()=>{const filter_data = resdata.filter((ele,item)=>(
                        ele.info.rating.rating_text>4))
                        setresdata(filter_data)}}>above 4 Stars</button>
                </div>

            </div>
            <div style={{marginLeft:'0px'}} className="flex flex-wrap m-4 gap-20  p-10 ">
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