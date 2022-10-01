import React from 'react'
import { Link } from 'react-router-dom'
import Img1 from '../assets/login-img.png'
import Logo from '../components/Logo'

import '../styles/signin.scss'

import SignImg from '../assets/images__14_-removebg-preview.png'

const SignIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className='signin-container'>
      <div className='box image'>
        <img src={Img1} alt="sign"/>
        <h4>
          welcome to dream team
        </h4>
      </div>
      <div className='box'>
        <div className="left top">
          <Link to='/'>
            back home
          </Link>
        </div>
        <div className="form sign">
        <div className="header-sign">
          <Logo />
        </div>
          <form onSubmit={handleSubmit}>
            <div className="form-input">
              <label htmlFor="">email</label>
              <input type="email" id="email" placeholder='Enter your email'
              />
            </div>

            <div className="form-input">
              <label htmlFor="">password</label>
              <input type="password"  id="password"  placeholder='Enter your password'

              />
            </div>
            <div className="left">
              <a href="/">
                forgot password ?
              </a>
            </div>
            <div className="btn-container">
              <button className='signin' type='submit'>Sign in</button>
              <button className='googlein' type='submit'>
                <img src={SignImg} alt="google" />
                Sign in with Google</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn
