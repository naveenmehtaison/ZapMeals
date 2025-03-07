import { LOGO_URl } from "./Utilities/contants"
import { useState } from "react"
import { NavLink,Link } from "react-router-dom"
import OnlineStatus from "./Utilities/OnlineStatus"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { logoutfunc, setcart } from "../Redux/createslice"
import Cart from "./Pages/Cart"
import { Fragment } from "react"
import { useNavigate } from "react-router-dom"
import SearchBar from "./SearchBar"
import { RxHamburgerMenu } from "react-icons/rx"
import { AiOutlineHome, AiOutlineInfoCircle, AiOutlineShoppingCart, AiOutlineLogin , AiOutlineLogout} from 'react-icons/ai'
import useComponentVisible from "../hooks/useComponentVisible"
const Header=()=>{
  const { ref, isComponentVisible } = useComponentVisible(true);
  console.log(isComponentVisible)
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
  const [showNavlink, setshowNavlink] = useState(false)
  const [hamburgerclass, sethamburgerclass] = useState('hidden')
  const hamburgerFunc=()=>{
    setshowNavlink(!showNavlink)
    sethamburgerclass( showNavlink? 'flex flex-col bg-slate-100 gap-3 h-48 p-4 rounded-lg absolute right-4 top-24  ' : 'hidden')

  }
  // <button className='loginbutton' onClick={()=>{login==='Login'? setlogin('Logout'):setlogin('Login')}}>{login}</button>
    return(
      <Fragment >
        {iscart && <Cart/>}
        
      
      <div className=' h-30 px-8 border-solid bg-gradient-to-r from-slate-900 via-slate-400 to-slate-400  rounded text-2xl'>
        <div className='flex space justify-between items-center'>
          <img className='size-28 rounded-full m-4 ' src={'https://plus.unsplash.com/premium_photo-1675344317761-3ace7cf2362a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGxvZ298ZW58MHx8MHx8fDA%3D'}></img>
          
            {/* <SearchBar/> */}
            
            <RxHamburgerMenu onClick={()=>{hamburgerFunc()}} className="sm:hidden " />

    
            <ul className={`${hamburgerclass} z-20  sm:flex gap-6 `} >
               


  
              <li><Link to='/'><AiOutlineHome></AiOutlineHome></Link></li>

              <li><Link to='/about'><AiOutlineInfoCircle></AiOutlineInfoCircle></Link></li>

              {/* <li><Link to='/contact'>Contact us</Link></li> */}

              {/* <li><Link to='/grocey'>Grocery</Link></li> */}
              <li  className = 'cursor-pointer flex' onClick={()=>showcartfunc()}><AiOutlineShoppingCart></AiOutlineShoppingCart>
              <li className="-mt-4   rounded-full absolute ml-6 text-sm ">{cartlen}</li>
              
              </li>
              
              <li
  onClick={() => {
    if (loginstate) {
      Dispatch(logoutfunc());
    }
  }}
>
  {loginstate ? (
    <span className="flex items-center cursor-pointer">
      <AiOutlineLogout className="mr-1" />
      Logout
    </span>
  ) : (
    <Link to="/login" className="flex items-center">
      <AiOutlineLogin className="mr-1" />
      Login
    </Link>
  )}
</li>

              </ul>


            
        </div>
      </div>
      </Fragment>
    )  
}
export default Header