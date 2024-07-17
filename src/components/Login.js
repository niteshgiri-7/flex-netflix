import React from 'react'
import Header from './Header'
import { HOME_IMG_URL } from '../utils/constants'
const Login = () => {
  return (
    <div>
      <Header/>
      <img src={HOME_IMG_URL} alt='homeImage'/>
    </div>
  )
}

export default Login;
