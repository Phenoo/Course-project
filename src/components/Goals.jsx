import React from 'react'

import Join from '../assets/join.png'

import Img1 from '../assets/icon-1.svg'
import Img2 from '../assets/icon-2.svg'
import Img3 from '../assets/icon-3.svg'
import Img4 from '../assets/icon-4.svg'

const Goals = () => {
  const items = [
    {
      id: 1,
      name: 'Stay motivated with engaging instructors',
      svg: Img1, 
    },
    {
      id: 2,
      name: 'Get certified with 100+ certification courses',
      svg: Img2, 
    },
    {
      id: 3,
      name: 'Keep up with in the latest in cloud',
      svg: Img3,
    },
    {
      id: 4,
      name: 'Build skills your way, from labs to courses',
      svg: Img4,
    },
  ]
  return (
    <div className="goals">
      <section>
        <div className="header">
          <div>
            <h6 className="headline">
              What’s New
            </h6>
            <h4 className="tophead">
              Master the skills to drive your career
            </h4>
            <p>
              Get certified, master modern tech skills, and level up your career — whether you’re starting out or a seasoned pro. 95% of eLearning learners report our hands-on content directly helped their careers.
            </p>
          </div>
          <div></div>
        </div>
        <div className="goals-container">
          <div className='grid'>
            {
              items.map((item) => {
                return (
                  <div className="item" key={item.id}>
                    <div>
                      <img src={item.svg} alt={item.name} />
                    </div>
                    <div>
                      <p>
                        {item.name}
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div>
            <img src={Join} alt="join" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Goals