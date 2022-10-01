import React from 'react'
import Logo from './Logo'

import {FaLinkedin, FaTwitter, FaFacebook} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <section>
        <div className="footer-container">
          <div className="footer-body">
            <div className="foot">
              <Logo />
              <p>
              Bird is an international banking app that offers to non-US residents and businesses a fully featured US-domiciled, FDIC insured bank account with debit cards, international and local transfers, wealth building account, payment consolidation and a checkout solution.
              </p>
            </div>
            <div className="foot">
              <h6>
                for instructor
              </h6>
              <ul>
                <li>
                  profile
                </li>
                <li>
                  login
                </li>
                <li>
                  register
                </li>
                <li>
                  dashboard
                </li>
                <li>
                  instructor
                </li>
              </ul>
            </div>
            <div className="foot">
              <h6>
                for student
              </h6>
              <ul>
                <li>
                  profile
                </li>
                <li>
                  login
                </li>
                <li>
                  register
                </li>
                <li>
                  dashboard
                </li>
                <li>
                  student
                </li>
              </ul>
            </div>
            <div className="foot">
              <h6>
                Support
              </h6>
              <ul>
                <li>blog</li>
                <li>faq</li>
                <li>privacy policy</li>
                <li>terms & condition</li>
                <li>contact us</li>
              </ul>
            </div>
          </div>
          <div className='bottom'>
            <div>
              <p>&copy; 2022. All rights reserved</p>
            </div>
            <div className='social'>
              <ul>
                <li>
                  <FaLinkedin />
                </li>
                <li>
                  <FaTwitter />
                </li>
                <li>
                  <FaFacebook />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer