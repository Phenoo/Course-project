import React from 'react'

import { Pagination } from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import User2 from '../assets/blog-04.jpg'
import User3 from '../assets/blog-03.jpg'
import User4 from '../assets/blog-02.jpg'
import User1 from '../assets/blog-01.jpg'
import { FaCalendar } from 'react-icons/fa'

const Blogs = () => {
  const Items = [
    {
      id: 1,
      name: 'an overworked newspaper editor',
      svg: User1, 
      job: 'design',
    },
    {
      id: 2,
      name: 'a solution built for teachers and students',
      svg: User2,  
      job: 'marketing',
    },
    {
      id: 3,
      name: '11 tips to help you get new clients',
      svg: User3,
      job: 'maufacturing',
    },
    {
      id: 4,
      name: 'Attract more attention, sales, profit',
      svg: User4,
      job: 'sales',
    },
    {
      id: 5,
      name: 'home to make crazy sales weekly',
      svg: User1,
      job: 'sales',
    },
  ]
  return (
    <div className="tutors blogs">
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
          className="mySwiper height"
        >
          {
            Items.map((item) => {
              return(
                <SwiperSlide className="swiperslide" key={item.id}>
                  <div className="item">
                      <img src={item.svg} alt={item.name} />
                      <h4>{item.name}</h4>
                      <h6>{item.job}</h6>
                      <p className='flex'>
                        <FaCalendar  /> 11 July, 2022
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

export default Blogs