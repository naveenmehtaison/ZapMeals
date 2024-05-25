const ShowingCategories=(props)=>{
    console.log(props)
    if(props.props===''){
        return
    }
    console.log(props.props)
    console.log(props.props.menu.categories)
    return(<>
        {
            props.props.menu.categories.map((ele,item)=>{
                return(
                    <>
                        <h2 className="bold bg-black text-white  font-light">{ele.category.name}</h2>
                        <>
                            {ele.category.items.map((ele,item)=>{
                                return(
                                    <div className="gap-3 items-start flex flex-row">
                                     <img className="size-28" src={ele.item.item_image_url}></img>
                                     <div className="right-10 flex-grow">
                                        <h2>{ele.item.name}</h2>
                                        <p className="whitespace-normal break-words">{ele.item.desc}</p>
                                        <p>Rs.{ele.item.display_price}</p>
                                     </div>
                                     {/* <p>Ratings:{Math.round(ele.item.rating.value)}</p> */}
                                        <hr className="w-full my-2" />
                                        <br></br>

                                    </div>


                                )
                            })}
                        </>
                    </>

                )
                
                // ele.categories.items.map((ele2,items)=>{
                //     <h3>{ele2}</h3>
                // })
            })
        }
    </>)

}
export default ShowingCategories