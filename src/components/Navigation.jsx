import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const Navigation = () => {
  return (
    <nav>
      <header>
        <section className="header">
          <Logo />
          <div className="nav-links">
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
          </div>
          <div className="nav-buttons">
            <button className="btn btn-trans">
              <Link to='/signup'>
                sign up
              </Link>
            </button>
            <button className='btn btn-blue'>
              <Link to='/signin'>
                sign in
              </Link>
            </button>
          </div>
        </section>
      </header>
    </nav>
  )
}

export default Navigation