import React from 'react'

import Img1 from '../assets/lead-01.png'
import Img2 from '../assets/lead-02.png'
import Img3 from '../assets/lead-03.png'
import Img4 from '../assets/lead-04.png'
import Img5 from '../assets/lead-05.png'
import Img6 from '../assets/lead-06.png'

import { Autoplay } from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'

const Brands = () => {
  const Items = [
    {
      id: 1,
      image: Img1
    },
    {
      id: 2,
      image: Img2
    },
    {
      id: 3,
      image: Img3
    },
    {
      id: 4,
      image: Img4
    },
    {
      id: 5,
      image: Img5
    },
    {
      id: 6,
      image: Img6
    },
  ]
  return (
    <div className="brands">
      <section>
        <div className="center">
          <h6 className="headline">
            trusted by
          </h6>
          <h4 className="tophead">
            500+ Leading Universities And Companies
          </h4>
        </div>
        <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            loop={true}
            className='mySwiper'
            spaceBetween={30}
            slidesPerView={"auto"}
          >
            {
              Items.map((item) => {
                return (
                  <SwiperSlide key={item.id} className='swiperslide'>
                    <div className="image">
                      <img src={item.image} alt="name" />
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

export default Brands