import React from 'react'

import { Pagination } from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import User1 from '../assets/user6.jpg'
import User2 from '../assets/user7.jpg'
import User3 from '../assets/user8.jpg'
import User4 from '../assets/user9.jpg'
import User6 from '../assets/user5.jpg'


import {FiUsers} from 'react-icons/fi'

const Tutors = () => {
  const Items = [
    {
      id: 1,
      name: 'patruca pedro',
      svg: User1, 
      job: 'java expert',
      class: 'orange',
    },
    {
      id: 2,
      name: 'dazzy milla',
      svg: User2,  
      job: 'php developer',
      class: 'blue',
    },
    {
      id: 3,
      name: 'skyler white',
      svg: User3,
      job: 'javascript developer',
      class: 'green',    
    },
    {
      id: 4,
      name: 'Medny Alat',
      svg: User4,
      job: 'UI designer',
      class: 'red',
    },
    {
      id: 5,
      name: 'madu marko',
      svg: User1,
      job: 'web designer',
      class: 'purple',
    },
    {
      id: 6,
      name: 'paul whine',
      svg: User6,
      job: 'cloud engr.',
      class: 'red',
    },
  ]
  return (
    <div className="tutors">
      <section>
        <div className="center">
          <h4 className="tophead">
            featured instructor
          </h4>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.
          </p>
        </div>
      <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            loop={true}
            slidesPerView={'auto'}
            pagination={{
              dynamicBullets: true,
            }}
            className="mySwiper"
          >
            {
              Items.map((item) => {
                return(
                  <SwiperSlide className="swiperslide" key={item.id}>
                    <div className="item">
                      <img src={item.svg} alt={item.name} />
                      <h4>{item.name}</h4>
                      <h6>{item.job}</h6>
                      <p>
                        <FiUsers color={item.class} /> 50 students
                      </p>
                    </div>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
      </section>
    </div>
  )
}

export default Tutors