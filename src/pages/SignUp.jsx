import React from 'react'
import { Link } from 'react-router-dom'
import Img1 from '../assets/login-img.png'
import Logo from '../components/Logo'

import '../styles/signin.scss'

import SignImg from '../assets/images__14_-removebg-preview.png'

const SignUp = () => {
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
        <div className="form">
          <div className="form-sign">
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
              <div className="form-input">
                <label htmlFor="">confirm password</label>
                <input type="password"  id="password"  placeholder='Enter your password'
                />
              </div>
              <div className="btn-container">
                <button className='signin' type='submit'>Create Account</button>
                <button className='googlein' type='submit'>
                  <img src={SignImg} alt="google" />
                  Sign up with Google</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
