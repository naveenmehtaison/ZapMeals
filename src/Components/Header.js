import { LOGO_URl } from "./Utilities/contants"
import { useState } from "react"
import { NavLink,Link } from "react-router-dom"
import OnlineStatus from "./Utilities/OnlineStatus"
const Header=()=>{
  const on = OnlineStatus()

  const [login, setlogin] = useState('Login')
    return(
      <div className='header'>
        <div className='logo'>

          <img className='logo-two' src={LOGO_URl}></img>
        </div>
        <ul >
          <li>STATUS{on?('ONLINE🟢'):('OFFLINE🔴')}</li>
          <li><Link to='/'>Home</Link></li>

          <li><Link to='/about'>About</Link></li>

          <li><Link to='/contact'>Contact us</Link></li>

          <li><Link to='/grocey'>Grocery</Link></li>
          <li>Cart</li>
          
          <li><button className='loginbutton' onClick={()=>{login==='Login'? setlogin('Logout'):setlogin('Login')}}>{login}</button></li>
        </ul>
  
  
  
      </div>
    )  
}
export default Header