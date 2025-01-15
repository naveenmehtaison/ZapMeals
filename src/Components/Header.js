import { LOGO_URl } from "./Utilities/contants"
import { useState } from "react"
import { NavLink,Link } from "react-router-dom"
import OnlineStatus from "./Utilities/OnlineStatus"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { logoutfunc, setcart } from "./Utilities/createslice"
import Cart from "./Pages/Cart"
import { Fragment } from "react"
import { useNavigate } from "react-router-dom"
import SearchBar from "./SearchBar"
import { AiOutlineHome, AiOutlineInfoCircle, AiOutlineShoppingCart, AiOutlineLogin , AiOutlineLogout} from 'react-icons/ai'
const Header=()=>{
  const navigate = useNavigate()
  const loginstate = useSelector((state)=>state.cart.login)
  const iscart = useSelector((state)=>state.cart.showcart)
  const cartlen = useSelector((state)=>state.cart.cart.length)

  const Dispatch  = useDispatch()
  const on = OnlineStatus()
  const showcartfunc=()=>{
    Dispatch(setcart())
  

  }


  const [login, setlogin] = useState('Login')
  // <button className='loginbutton' onClick={()=>{login==='Login'? setlogin('Logout'):setlogin('Login')}}>{login}</button>
    return(
      <Fragment >
        {iscart && <Cart/>}
        
      
      <div className=' h-30 px-8 border-solid bg-gradient-to-r from-slate-900 via-slate-400 to-slate-400  rounded text-2xl'>
        <div className='flex space justify-between items-center'>
          <img className='size-28 rounded-full m-4 ' src={'https://plus.unsplash.com/premium_photo-1675344317761-3ace7cf2362a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGxvZ298ZW58MHx8MHx8fDA%3D'}></img>
          
            <SearchBar/>
            
            <ul className="flex gap-6 ">
            {/* <SearchBar/> */}

  
              <li><Link to='/'><AiOutlineHome></AiOutlineHome></Link></li>

              <li><Link to='/about'><AiOutlineInfoCircle></AiOutlineInfoCircle></Link></li>

              {/* <li><Link to='/contact'>Contact us</Link></li> */}

              {/* <li><Link to='/grocey'>Grocery</Link></li> */}
              <li  className = 'cursor-pointer flex' onClick={()=>showcartfunc()}><AiOutlineShoppingCart></AiOutlineShoppingCart>
              <li className="-mt-4   rounded-full absolute ml-6 text-sm ">{cartlen}</li>
              
              </li>
              
              <li onClick={()=>{loginstate? (Dispatch(logoutfunc())):null}}><Link to='/login'>{loginstate?<AiOutlineLogout></AiOutlineLogout>:<AiOutlineLogin></AiOutlineLogin>}</Link> </li>
            </ul>
        </div>
      </div>
      </Fragment>
    )  
}
export default Header