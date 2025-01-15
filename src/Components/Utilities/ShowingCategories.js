import { useDispatch, useSelector } from "react-redux"
import Store from "./ReduxStore"
import { addtocart } from "./createslice"
import { No_Image } from "./contants"

const ShowingCategories=(props)=>{
    const Dispatch = useDispatch()
    const Carthandler=(ele)=>{
        // toast('🦄 Wow so easy!', {
        //     position: "top-right",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: false,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "light",

        //     });

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
                        <h1 className="bold   text-white bg-gray-600   font-medium mb-2">{ele?.category?.name}</h1>
                        <>
                            {ele?.category?.items.map((ele,item)=>{
                                return(
                                    <div key={item} className="gap-3 items-start flex mb-2 flex-row">
                              
                                        <div className="relative">
                                            <img onClick={()=>Carthandler(ele)} className="h-[150px] w-[250px] rounded-xl cursor-pointer " src={ele.item.item_image_url||No_Image} ></img>
                                            {/* <button onClick={()=>Carthandler(ele)} className=" bottom-[1px] left-[50%] translate-x-[-50%] absolute  items-center bg-blue-100 hover:bg-blue-500 w-12 h-12 rounded-md">Add</button> */}
                                        </div>
                                     <div className="overflow-hidden right-10 w-[100%] mt-2  justify-between gap-6">
                                        <h2 onClick={()=>Carthandler(ele)} className="font-extrabold cursor-pointer" >{ele?.item?.name}</h2>
                                        <p className=" font-semibold  " >Rs.{ele.item.display_price}</p>
                                        <p className="max-w-xl font-light"style={{overflowWrap:'break-word',wordWrap:'break-word', whiteSpace:'normal'}} >{ele.item.desc}</p>
                                        
                                     </div>
                                     {/* <p>Ratings:{Math.round(ele.item.rating.value)}</p> */}
    

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