import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify'
import { auth } from './../firebase';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginfunc } from './Utilities/createslice';
const Login = () => {
  const navigate = useNavigate()
  const Dispatch = useDispatch()
  const nameRef = useRef()
  const passwordRef = useRef()
  const [login, setlogin] = useState(true)
  const [error,seterror] = useState('')

  const handlesubmit=(e)=>{
    e.preventDefault()
    if(!login){

      createUserWithEmailAndPassword(auth, nameRef.current.value, passwordRef.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          Dispatch(loginfunc())



          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterror(errorCode+errorMessage)
          // ..
        });

    }
    else{
signInWithEmailAndPassword(auth, nameRef.current.value, passwordRef.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    toast.success('logged in')
    navigate('/')
    Dispatch(loginfunc())
    
    alert('signed in ')
    alert('logged in suceesfully')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterror(errorCode+errorMessage)


  });
    }

  }
  return (
<div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
	<div class="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div class="max-w-md mx-auto">
				<div>
					<h1 class="text-2xl font-semibold">{login?'Login':'Signup'} </h1>
				</div>
				<div class="divide-y divide-gray-200">
					<div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div class="relative">
              
							<input ref={nameRef} autocomplete="off" id="email" name="email" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
							<label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
						</div>
						<div class="relative">
							<input ref={passwordRef} autocomplete="off" id="password" name="password" type="password" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							<label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
						</div>
						<div class="relative">
							<button onClick={(e)=>handlesubmit(e)} class="bg-blue-500 text-white rounded-md px-2 py-1">Submit</button>
						</div>
            <p onClick={()=>(setlogin(!login))} className='cursor-pointer text-black'>{!login?'Already Have an Account':'Create a New Account'}</p>
					</div>
          <p className='text-red-700'>{error}</p>
				</div>
			</div>
		</div>
	</div>
</div>
  )
}

export default Login