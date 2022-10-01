import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navigation = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav>
      <header>
        <section className="navheader">
          <Logo />
          <div className={`menu ${navbar ? 'navbar' : ''}`} >
            <ul>
              <li>
                <Link to='/'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/'>
                  instructors
                </Link>
              </li>
              <li>
                <Link to='/'>
                  students
                </Link>
              </li>
              <li>
                <Link to='/'>
                  pages
                </Link>
              </li>
              <li>
                <Link to='/'>
                  blog
                </Link>
              </li>
              </ul>
            <div className="nav-buttons">
              <button className="btn btn-blue">
                <Link to='/signup'>
                  sign up
                </Link>
              </button>
              <button className="btn btn-blue">
                <Link to='/signin'>
                  sign in
                </Link>
              </button>
            </div>
          </div>
          <button className='menu-btn' onClick={() => setNavbar(!navbar)}>
            {
              navbar ? <FaTimes/ > : <FaBars />
            }
          </button>
        </section>
      </header>
    </nav>
  )
}

export default Navigation