import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const VerifyEmail = ({setVerifiedEmail}) => {
  return (
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
  )
}

export default VerifyEmail