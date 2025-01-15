import { useDispatch, useSelector } from "react-redux"
import Store from "./ReduxStore"
import { addtocart } from "./createslice"
import { No_Image } from "./contants"
const ShowingCategories=(props)=>{
    const Dispatch = useDispatch()
    const Carthandler=(ele)=>{

        Dispatch(addtocart(ele))
    }
    if(props.props===''){
        return
    }

    return(<div className="overflow-hidden">
        {
            props?.props?.menu?.categories.map((ele,item)=>{
                
                return(
                    <div key={item} className=" left-0">
                        <h2 className="bold bg-black  text-white  font-light">{ele?.category?.name}</h2>
                        <>
                            {ele?.category?.items.map((ele,item)=>{
                                return(
                                    <div key={item} className="gap-3 items-start flex mb-2 flex-row">
                              
                                        <div className="relative">
                                            <img className="h-[200px] w-[200px] " src={ele.item.item_image_url||No_Image} ></img>
                                            <button onClick={()=>Carthandler(ele)} className=" bottom-[1px] left-[50%] translate-x-[-50%] absolute  items-center bg-blue-100 hover:bg-blue-500 w-12 h-12 rounded-md">Add</button>
                                        </div>
                                     <div className="right-10 w-[100%] mt-10 flex justify-between gap-4">
                                        <h2>{ele?.item?.name}</h2>
                                        <p className="line-clamp-8">{ele.item.desc}</p>
                                        <p className="mt-4 font-sans" >Rs.{ele.item.display_price}</p>
                                     </div>
                                     {/* <p>Ratings:{Math.round(ele.item.rating.value)}</p> */}
                                        <hr className="w-full my-2" />
                                        <br></br>

                                    </div>


                                )
                            })}
                        </>
                    </div>

                )
                
                // ele.categories.items.map((ele2,items)=>{
                //     <h3>{ele2}</h3>
                // })
            })
        }
    </div>)

}
export default ShowingCategories