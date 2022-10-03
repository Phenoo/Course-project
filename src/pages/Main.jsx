import React, { useEffect } from 'react'
import Blogs from '../components/Blogs'
import Brands from '../components/Brands'
import Category from '../components/Category'
import Courses from '../components/Courses'
import Footer from '../components/Footer'
import Goals from '../components/Goals'
import Home from '../components/Home'
import Mentor from '../components/Mentor'
import Navigation from '../components/Navigation'
import Offers from '../components/Offers'
// import Review from '../components/Review'
import Tutors from '../components/Tutors'
import Update from '../components/Update'

import scrollreveal from 'scrollreveal'


const Main = () => {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "60px",
      duration: 2000,
      reset: true
    });
    sr.reveal(
      `
      .home-container,
      .goals img,
      .item,
      .header,
      .center
      `,
      {
        opacity: 0,
        interval: 300,
      }
    )
  })
  // useEffect(() => {
  //   const sright = scrollreveal({
  //     origin: "right",
  //     distance: "60px",
  //     duration: 2000,
  //     reset: true
  //   });
  //   sright.reveal(
  //     `
  //     .goals img,
  //     `,
  //     {
  //       opacity: 0,
  //       interval: 300,
  //     }
  //   )
  // })


  return (
    <>
      <Navigation />
      <Home />
      <Offers />
      <Category />
      <Update />
      <Goals />
      <Courses />
      <Tutors />
      <Brands />
      <Mentor />
      <Blogs />
      <Footer />
    </>
  )
}

export default Main