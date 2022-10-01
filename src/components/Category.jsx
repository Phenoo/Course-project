import React from 'react'

import { Pagination } from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import Img2 from '../assets/categories-icon-02.png'
import Img3 from '../assets/categories-icon-03.png'
import Img4 from '../assets/categories-icon-04.png'
import Img5 from '../assets/categories-icon-05.png'

const Category = () => {
  const items = [
    {
      id: 1,
      name: 'python development',
      svg: Img2, 
      number: '23 instructors' 
    },
    {
      id: 2,
      name: 'react native',
      svg: Img3, 
      number: '31 instructors' 
    },
    {
      id: 3,
      name: 'angular development',
      svg: Img4, 
      number: '13 instructors' 
    },
    {
      id: 4,
      name: 'Docker Learning',
      svg: Img5, 
      number: '27 instructors' 
    },
  ]
  return (
    <div className="category">
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
              all categories
            </button>
          </div>
        </div>
        <div className="category-container">
          <Swiper 
            modules={[Pagination]}
            spaceBetween={30}
            loop={true}
            slidesPerView={'auto'}
            pagination={{
              dynamicBullets: true,
            }}
            className="swiper-b"
          >
            {
              items.map(item => {
                return (
                    <SwiperSlide key={item.id} className='swiperslide'>
                      <div className="item">
                        <img src={item.svg} alt={item.name} />
                        <h4>{item.name}</h4>
                        <p>{item.number}</p>
                      </div>
                    </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
      </section>
    </div>
  )
}

export default Category