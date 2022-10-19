import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Img1 from '../assets/login-img.png'
import Logo from '../components/Logo'
import {FaFacebook} from 'react-icons/fa'
import {useAuth} from '../context/StateContext'

import axios from 'axios'

import '../styles/signin.scss'

import SignImg from '../assets/images__14_-removebg-preview.png'


const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState('')
  const userRef = useRef();
  const navigate = useNavigate();

  const {setUser, setLoading, closeLoader} = useAuth()


  useEffect(() => {
    userRef.current.focus();
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    closeLoader();
    try {
        const response = await axios.post("https://ideas4africa.tech/api/login",
            JSON.stringify({ email, password }),
            {
                headers: { 
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
                },
                withCredentials: true
            }
        );
        // TODO: remove console.logs before deployment
        console.log(JSON.stringify(response?.data));
        console.log('success')
        //console.log(JSON.stringify(response))
        //clear state and controlled inputs
        setUser('');
    } catch (err) {
        if (!err?.response) {
            console.log('No Server Response');
        } else if (err.response?.status === 409) {
            console.log('Username Taken');
        } else {
            console.log('Registration Failed')
        }
    }
}

  return (
    <div className='signin-container'>
      <div className='box image'>
        <img src={Img1} alt="sign"/>
        <h4>
          welcome to dream team
        </h4>
      </div>
      <div className='box signin-text'>
        <section>
          <div className="left top">
            <Link to='/'>
              back home
            </Link>
          </div>
          <div className={`form sign ${error ? 'red' : ''}`}>
          <div className="header-sign">
            <Logo />
          </div>
            <form onSubmit={handleSubmit}>
              <div className="form-input">
                <label htmlFor="">email</label>
                <input type="email" id="email" placeholder='Enter your email'
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
                value={email}
                ref={userRef}
                required
                />
              </div>

              <div className="form-input">
                <label htmlFor="">password</label>
                <input type="password"  id="password"  placeholder='Enter your password'
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
              </div>
              <div className="left">
                <Link to="/signup">
                  <p>
                    forgot password ?
                  </p>
                </Link>
              </div>
              <div className="check">
                <input type="checkbox" name="Remember" id="" />
                <p>Remember me</p>
              </div>
              <div className="btn-container">
                <button className='signin' type='submit'>Sign in</button>
              </div>
            </form>
          </div>
        </section>
        <div className="other-btn">
          <h4>
            or
          </h4>
            <p>
              sign in with
            </p>
            <div className="container">
              <button className='googlein' type='submit'>
                <img src={SignImg} alt="google" />
                Sign in using Google
              </button>
              <p>
                |
              </p>
              <button className='blue'>
                <FaFacebook /> sign in with facebook
              </button>
            </div>
            <p>
                New User ? <Link to="/signup" className='purple'>
                  Create an Account
                </Link>
              </p>
        </div>
      </div>
    </div>
  )
}

export default SignIn
