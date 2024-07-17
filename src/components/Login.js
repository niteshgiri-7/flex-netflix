import React from 'react'
import Header from './Header'
import { HOME_IMG_URL } from '../utils/constants'
const Login = () => {
  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img src={HOME_IMG_URL} alt='homeImage'/>
      </div>
      <form className='p-12 bg-black rounded-lg bg-opacity-80 absolute w-3/12 mx-auto my-48 right-0 left-0 '>
      <div className='font-bold text-white'>
        <h1 className='text-4xl py-4 my-2'>Sign In</h1>
        <input className="w-full p-4 my-2 bg-gray-700 rounded-sm"type='text' placeholder='Email Address'></input>
        <input className="w-full p-4 my-2 bg-gray-700 rounded-sm"type='text' placeholder='Full Name'></input>
        <input className="w-full p-4 my-2 bg-gray-700 rounded-sm"type='password' placeholder='password'></input>
        <button className="w-full py-4 my-2 rounded-md bg-red-600">Sign In</button>
        <p className='py-4'>New to netflix? <button className='border-solid  border-b border-white'>Sign Up</button> now</p>
      </div>
      </form>
    </div> 
  )
}

export default Login;
