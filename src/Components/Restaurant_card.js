import { FOOD_URl } from "./Utilities/contants"
const Restaurant_Card=(props)=>{

    
    // console.log('hariaapa', props.info,restaurant_data)
    const {
        props:{
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        locality}
        
    }= props

    return(
      <div  >
        
          <ul style={{marginLeft:'0px'}} className='res-container'>          
            <div  className='res-card'>
                <img src={FOOD_URl+ cloudinaryImageId}></img>
                <h4>{name}</h4>
                <p>{locality}</p>
                <p>{costForTwo}</p>
                <p>{avgRating}Stars</p>
                <p>deleivery -</p>
            </div>
  
        </ul>
      </div>
    )
}
export default Restaurant_Card