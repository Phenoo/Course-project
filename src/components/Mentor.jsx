import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'

import Img1 from '../assets/share.png'

const Mentor = () => {
  return (
    <div className="mentor">
      <section className='grid'>
        <div>
          <img src={Img1} alt="name" />
        </div>
        <div className="div">
          <h4>
          Want to share your knowledge? Join us a Mentor?
          </h4>
          <p>
          High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.
          </p>
          <div>
            <span>
              <AiFillCheckCircle />
            </span>
            <span>
              <h6>
                best courses
              </h6>
            </span>
          </div>
          <div>
            <span>
              <AiFillCheckCircle />
            </span>
            <span>
              <h6>
                Top rated Instructors              
              </h6>
            </span>
          </div>
          <button className="btn btn-blue">
            read more
          </button>
        </div>
      </section>
    </div>
  )
}

export default Mentor