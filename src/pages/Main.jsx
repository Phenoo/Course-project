import React from 'react'
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
import Review from '../components/Review'
import Tutors from '../components/Tutors'
import Update from '../components/Update'

const Main = () => {
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
      <Review />
      <Blogs />
      <Footer />
    </>
  )
}

export default Main