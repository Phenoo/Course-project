import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Img1 from '../assets/login-img.png'
import Logo from '../components/Logo'

import '../styles/signin.scss'

import SignImg from '../assets/images__14_-removebg-preview.png'
import axios from 'axios'
import { AiOutlineMail } from 'react-icons/ai'
import { FaTimes } from 'react-icons/fa'

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState(false);
  const [verifiedEmail, setVerifiedEmail] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setError(false)
    }, 3000)
  })


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password, phone)
    const configuration = {
      method: "post",
      url: "https://ideas4africa.tech/api/register",
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      withCredentials: false,
      data: {
        email,
        password,
        phone,
        name
      },
    };

      axios(configuration)
      .then((result) => {console.log(result)
        setVerifiedEmail(!verifiedEmail)
        setError(false)
      })
      .catch((err) => {
        console.error(err)
        setError(true)
      })
  }

  return (
    <div className='signin-container'>
      {verifiedEmail &&
        <div className="verify-email">
          <div className="verify-container">
            <button className="btn-times" onClick={() => setVerifiedEmail(false)}>
              <FaTimes /> 
            </button>
            <h4>
              verify email
            </h4>
            <p>
              Check your email & click link to verify your account
            </p>
            <AiOutlineMail className='mail' />
            <div className="btn-container">
              <button>
                <Link to='/signup'>
                resend email
                </Link>
              </button>
              <button>
                <Link to='/signin'>
                  done
                </Link>
              </button>
              <button>
                <Link to='/'>
                  contact support
                </Link>
              </button>
            </div>
          </div>
        </div>
      }
      
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
        <div className={`form ${error ? 'red' : ''}`}>
          <div className="form-sign">
            <div className="header-sign">
              <Logo />
            </div>
            {error && <p style={{color: 'red', textAlign: 'center'}}>Enter correct values</p> }
            <form onSubmit={handleSubmit}>
            <div className="form-input">
                <label htmlFor="">Name</label>
                <input type="text" id="name" placeholder='Enter your email'
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-input">
                <label htmlFor="">email</label>
                <input type="email" id="email" placeholder='Enter your email'
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-input">
                <label htmlFor="">password</label>
                <input type="password"  id="password"  placeholder='Enter your password'
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-input">
                <label htmlFor="">Phone</label>
                <input type="text"  id="phone"  placeholder='Enter your password'
                  onChange={(e) => setPhone(e.target.value)}
                  required
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
