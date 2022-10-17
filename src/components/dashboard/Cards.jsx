import React from 'react'
import Img1 from '../../assets/icon-01.svg'
import Img2 from '../../assets/gratuate-icon.svg'
import Img3 from '../../assets/icon-1.svg'


const Cards = () => {
  return (
    <div className="cards-container">
      <section className="cards-wrapper">
        <div className="card">
          <div className="text">
            <h3>
              50
            </h3>
            <h4>
              purchased courses
            </h4>
            <a href="#a">
              view all
            </a>
          </div>
          <div className="image">
            <img src={Img1} alt="courses" />
          </div>
        </div>
        <div className="card">
          <div className="text">
            <h3>
              30
            </h3>
            <h4>
              total transactions
            </h4>
            <a href="#a">
              view all
            </a>
          </div>
          <div className="image">
            <img src={Img2} alt="courses" />
          </div>
        </div>
        <div className="card">
          <div className="text">
            <h3>
              50
            </h3>
            <h4>
              total deposit
            </h4>
            <a href="#a">
              view all
            </a>
          </div>
          <div className="image">
            <img src={Img3} alt="courses" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cards