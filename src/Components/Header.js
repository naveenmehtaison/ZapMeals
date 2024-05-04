import { LOGO_URl } from "./Utilities/contants"
import { useState } from "react"
const Header=()=>{
  const [login, setlogin] = useState('Login')
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
          
          <li><button className='loginbutton' onClick={()=>{login==='Login'? setlogin('Logout'):setlogin('Login')}}>{login}</button></li>
        </ul>
  
  
  
      </div>
    )  
}
export default Header