import { NavLink } from "react-router-dom"
import { FOOD_URl } from "./Utilities/contants"
import { Link } from "react-router-dom"
import OnlineStatus from "./Utilities/OnlineStatus"

const Restaurant_Card=(props)=>{
  console.log(props.props)


   
    console.log('hariaapa', props)
    const { image, name, rating, cuisine, cft, locality, timing, distance } = props.props.info
    const add = props.props.order.actionInfo.clickUrl
    console.log(add)
    console.log(distance)



    return(
      <div  >
        
          <ul style={{marginLeft:'0px'}} className='res-container'>          
            <div  className='res-card'>
               <img src={image.url}></img>
                <Link to ={`/resmenu/${add}`}><h4>{name}</h4></Link>
                <p>{locality.name}</p>  
                 <p>{cft.text}</p>  
                <p>{rating.rating_text}Stars</p> 
                <p>{distance}</p>  
            </div>
  
          </ul>
      </div>
    )
}
export default Restaurant_Card