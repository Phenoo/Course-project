import React from 'react'

import {AiOutlineSearch} from 'react-icons/ai'
import {FaStar} from 'react-icons/fa'

import HomeImg from '../assets/object.png'

const Home = () => {
  return (
    <div className="home">
      <section className='home-container'>
        <div className="home-text">
          <p>
            The Leader in Online Learning
          </p>
          <h1>
            Engaging & <br /> Accessible Online <br /> Courses For All
          </h1>
          <p>
            Own your future learning new skills online
          </p>
          <div className="home-form">
            <form>
              <div className='form-input'>
                <input type="search" name="courses" placeholder="search schools, courses, instructors etc" />
              </div>
              <div className='select'>
                <select name="category" id="">
                  <option value="0">Category</option>
                  <option value="1">angular</option>
                  <option value="2">python</option>
                  <option value="3">javascript</option>
                  <option value="3">ruby & rails</option>
                </select>
              </div>
              <button>
                <AiOutlineSearch />
              </button>
            </form>
          </div>
          <div className="home-count">
            <h4>
              Trusted by over 15K Users <br />
              worldwide since 2022
            </h4>
            <div className="star">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
        </div>
        <div className="home-image">
          <img src={HomeImg} alt="home" />
        </div>
      </section>
    </div>
  )
}

export default Home