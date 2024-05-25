import { LOGO_URl } from "./Utilities/contants"
import { useState } from "react"
import { NavLink,Link } from "react-router-dom"
import OnlineStatus from "./Utilities/OnlineStatus"
const Header=()=>{
  const on = OnlineStatus()

  const [login, setlogin] = useState('Login')
    return(
      <div className='border-solid bg-pink-200 mt-2 ml-2 mr-2 rounded text-2xl'>
        <div className='flex space justify-between items-center'>
          <img className='size-40  'src={LOGO_URl}></img>
            <ul className="flex gap-4 ">
              <li>STATUS{on?('ONLINE🟢'):('OFFLINE🔴')}</li>
              <li><Link to='/'>Home</Link></li>

              <li><Link to='/about'>About</Link></li>

              <li><Link to='/contact'>Contact us</Link></li>

              <li><Link to='/grocey'>Grocery</Link></li>
              <li>Cart</li>
              
              <li><button className='loginbutton' onClick={()=>{login==='Login'? setlogin('Logout'):setlogin('Login')}}>{login}</button></li>
            </ul>
        </div>
      </div>
    )  
}
export default Header