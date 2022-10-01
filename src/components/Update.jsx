import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'

import { FaStar } from 'react-icons/fa'

import Img1 from '../assets/course-01.jpg'
import Img2 from '../assets/course-02.jpg'
import Img3 from '../assets/course-03.jpg'
import Img4 from '../assets/course-04.jpg'
import Img5 from '../assets/course-05.jpg'
import Img6 from '../assets/course-06.jpg'

import User1 from '../assets/user1.jpg'
import User2 from '../assets/user2.jpg'
import User3 from '../assets/user3.jpg'
import User4 from '../assets/user4.jpg'
import User5 from '../assets/user5.jpg'
import User6 from '../assets/user6.jpg'

import Svg1 from '../assets/icon-01.svg'
import Svg2 from '../assets/icon-02.svg'

const Update = () => {
  const items = [
    {
      id: 1,
      courseimg: Img1,
      name: "information About UI/UX Design Degree",
      price: '450',
      discount: '900',
      instructor: "Nicole Brown",
      image: User1,
      time: '1hr 40mins',
      rating: 4.5
    },
    {
      id: 2,
      courseimg: Img2,
      name: "Wordpress for Beginners - Master Wordpress Quickly",
      price: '450',
      discount: '900',
      instructor: "Jennis Nia",
      image: User2,
      time: '1hr 40mins',
      rating: 4.3
    },
    {
      id: 3,
      courseimg: Img3,
      name: "Sketch from A to Z (2022): Become an app designer",
      price: '450',
      discount: 'free',
      instructor: "Micheal Leo",
      image: User3,
      time: '12hr 30mins',
      rating: 4.1
    },
    {
      id: 4,
      courseimg: Img4,
      name: "Wordpress for Beginners - Master Wordpress Quickly",
      price: '450',
      discount: '900',
      instructor: "Jennis Nia",
      image: User4,
      time: '3hr 40mins',
      rating: 4.3
    },
    {
      id: 5,
      courseimg: Img5,
      name: "Learn Angular Fundamentals From beginning to advance lavel",
      price: '450',
      discount: '900',
      instructor: "Stella johnsmith",
      image: User5,
      time: '6hr 10mins',
      rating: 4.5
    },
    {
      id: 6,
      courseimg: Img6,
      name: "Build Responsive Real World Websites with HTML5 and CSS3",
      price: '350',
      discount: '500',
      instructor: "John Paul",
      image: User6,
      time: '4hr 20mins',
      rating: 4.3
    },
    
  ]
  return (
    <div className="update">
      <section>
      <div className="header">
          <div>
            <h6 className="headline">favourite courses</h6>
            <h4 className="tophead">
              category 
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam omnis minima dignissimos incidunt nesciunt iure repudiandae eos dolorum natus nulla
            </p>
          </div>
          <div>
            <button className="btn btn-blue">
              all courses
            </button>
          </div>
        </div>
        <div className="update-container">
          {
            items.map(item => {
              return (
                <div className="item" key={item.id}>
                  <div className="image">
                    <img src={item.courseimg} alt={item.name} />
                    <div className="span">
                      <h6>${item.price}</h6>
                      <span className="discount">${item.discount}</span>
                    </div>
                  </div>
                  <div className="text">
                    <div className="header">
                      <div className="instructor">
                        <div>
                          <img src={item.image} alt={item.instructor} />
                        </div>
                        <div>
                          <h5>
                            {item.instructor}
                          </h5>
                          <h6>
                            instructor
                          </h6>
                        </div>
                      </div>
                      <div className="heart">
                        <AiOutlineHeart />
                      </div>
                    </div>
                    <h4>
                      {item.name}
                    </h4>
                    <div className="header time">
                      <div>
                        <img src={Svg1} alt="time" />
                        <p>12+ Lesson</p>
                      </div>
                      <div>
                        <img src={Svg2} alt="time" />
                        <p>{item.time}</p>
                      </div>
                    </div>
                    <div className="star">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar color='grey' /> 
                      <p>{item.rating}</p>
                      <p>15</p>
                    </div>
                    <button className="btn btn-blue">
                      buy now
                    </button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
    </div>
  )
}

export default Update