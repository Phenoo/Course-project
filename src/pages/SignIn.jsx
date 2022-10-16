import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Img1 from '../assets/login-img.png'
import Logo from '../components/Logo'

import {useAuth} from '../context/StateContext'

import '../styles/signin.scss'

import SignImg from '../assets/images__14_-removebg-preview.png'


const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false);
  const userRef = useRef();
  const navigate = useNavigate();

  const {setUser, setLoading, closeLoader} = useAuth()


  useEffect(() => {
    userRef.current.focus();
  }, [])

  async function loginUser(credentials){
    return fetch( "https://ideas4africa.tech/api/login",{
      method: "POST",
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    .then(data => data.json())
    .catch((err) =>{
      console.log(err)
      setError(true)
    })
    .then(response => {
      console.log("response", response);
      setLoading(true);
      closeLoader();
      navigate('/user')
    }).catch(error => {
      console.log("some error occurred", error);
      setError(true)
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password,
    })
    setUser(token)
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
                forgot password ?
              </Link>
              <Link to='/signup'>
                don't have an account yet?
              </Link>
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
