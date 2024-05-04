import { LOGO_URl } from "./Utilities/contants"
const Header=()=>{
    return(
      <div className='header'>
        <div className='logo'>
          <img className='logo-two' src={LOGO_URl}></img>
        </div>
        <ul >
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
  
  
  
      </div>
    )  
}
export default Header