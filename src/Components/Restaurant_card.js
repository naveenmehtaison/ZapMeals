import { NavLink } from "react-router-dom"
import { FOOD_URl } from "./Utilities/contants"
import { Link } from "react-router-dom"
import OnlineStatus from "./Utilities/OnlineStatus"

const Restaurant_Card=(props)=>{
  console.log(props.props.name ,props)


   
  //   console.log('hariaapa', props)
    const { image, name, rating, cuisine, cft, locality, timing, distance } = props.props.info
    const add = props.props.order.actionInfo.clickUrl
    return(
      <div className=' flex flex-wrap bg-gray-100 h-78 w-80 hover:bg-slate-400 border' >
        
          <ul  >          
            <div  >
               <img src={image.url}></img>
                <Link to ={`/resmenu/${add}`}><b className="text-blue-800">{name}</b></Link>
                <p>{locality.name}</p>  
                 <p>{cft.text}</p>  
                <p>{rating.rating_text}Stars</p> 
                <p>{distance}</p>  
            </div>
  
          </ul>
      </div>
    )
}
export const Restaurant_Card_special = (Restaurant_Card) => {
  

  return (props) => {
    console.log('iminside promoted card');

    return (
      <div>
        <label className="bg-black text-white absolute">Promoted</label>
        <Restaurant_Card {...props} />
      </div>
    );
  };
};
export default Restaurant_Card