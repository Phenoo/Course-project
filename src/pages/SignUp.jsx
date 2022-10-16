import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Img1 from '../assets/login-img.png'
import Logo from '../components/Logo'

import '../styles/signin.scss'

import SignImg from '../assets/images__14_-removebg-preview.png'

import {useAuth} from '../context/StateContext'
import VerifyEmail from '../components/VerifyEmail'


const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState(false);
  const [verifiedEmail, setVerifiedEmail] = useState(false);
  const {setUser} = useAuth()


  async function signupUser(credentials){
    return fetch( "https://ideas4africa.tech/api/register",{
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
      // setLoading(true);
      // closeLoader();
      setVerifiedEmail(true);
    }).catch(error => {
      console.log("some error occurred", error);
      setError(true)
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await signupUser({
      name,
      email,
      password,
      phone,
    })
    setUser(token)
  }

  return (
    <div className='signin-container'>
      {verifiedEmail && <VerifyEmail setVerifiedEmail={setVerifiedEmail} />}
      
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
                  value={name}
                  required
                />
              </div>
              <div className="form-input">
                <label htmlFor="">email</label>
                <input type="email" id="email" placeholder='Enter your email'
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
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
              <div className="form-input">
                <label htmlFor="">Phone</label>
                <input type="text"  id="phone"  placeholder='Enter your password'
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  value={phone}
                />
              </div>
              <div className="btn-container">
                <button className='signin' type='submit'>Create Account</button>
                <button className='googlein' type='submit'>
                  <img src={SignImg} alt="google" />
                  Sign up with Google</button>
              </div>
              <Link to="/signin">
                have an account already? Log in
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
