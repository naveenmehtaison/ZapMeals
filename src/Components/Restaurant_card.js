import { NavLink } from "react-router-dom"
import { FOOD_URl } from "./Utilities/contants"
import { Link } from "react-router-dom"
import OnlineStatus from "./Utilities/OnlineStatus"

const Restaurant_Card=(props)=>{

  
    const { image, name, rating, cuisine, cft, locality, timing, distance } = props.props.info
    const add = props.props.order.actionInfo.clickUrl
    return(
      <div className='  h-72 w-60 hover:bg-slate-400 hover:scale-95  size-96 hover:shadow-[10px_10px_30px]'>       
          <ul  >          
            <div  >

               <img className="h-48 w-60" src={image.url}></img>
                <Link to ={`/resmenu/${add}`}><b className="text-blue-800">{name}</b></Link>
                <p className="text-gray-500" >{locality.name.length<30 ? locality.name : locality.name.slice(0,30) + '...'}</p>  
                 <p className="" >{cft.text}</p>  
                <p>{'⭐'.repeat(rating.rating_text)}</p> 
                <p>{distance}</p>  
            </div>
  
          </ul>
      </div>
    )
}
export const Restaurant_Card_special = (Restaurant_Card) => {
  

  return (props) => {


    return (
      <div>
        <label className="bg-red-500 p-1 text-white absolute">15% off</label>
        <Restaurant_Card {...props} />
      </div>
    );
  };
};
export default Restaurant_Card