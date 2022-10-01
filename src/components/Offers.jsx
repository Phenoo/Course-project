import React from 'react'
import Courses from '../assets/cources-icon.svg'
import Cert from '../assets/certificate-icon.svg'
import Graduate from '../assets/gratuate-icon.svg'
import Pencil from '../assets/pencil-icon.svg'

const Offers = () => {
  const items = [
    {
      id: 1,
      name: 'online courses',
      svg: Courses, 
      number: '1k' 
    },
    {
      id: 2,
      name: 'expert tutors',
      svg: Pencil, 
      number: '46' 
    },
    {
      id: 3,
      name: 'languages',
      svg: Cert,
      number: '30' 
    },
    {
      id: 4,
      name: 'online students',
      svg: Graduate,
      number: '15k' 
    },
  ]
  return (
    <div className="offers">
      <section className='grid'>
        {
          items.map((item) => {
            return (
              <div className="item" key={item.id}>
                <div>
                  <img src={item.svg} alt={item.name} />
                </div>
                <div>
                  <h6>
                    {item.number}
                  </h6>
                  <p>
                    {item.name}
                  </p>
                </div>
              </div>
            )
          })
        }
      </section>
    </div>
  )
}

export default Offers