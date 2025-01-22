import React from 'react'
import AboutIntellect from './components/aboutIntellect/aboutIntellect'
import HeroSection from './components/hero-section/hero-section'
import Reviews from './components/reviews/reviews'

const page = () => {
  return (
    <div>
      <HeroSection/>
      <AboutIntellect/>
      <Reviews/>
    </div>
  )
}

export default page