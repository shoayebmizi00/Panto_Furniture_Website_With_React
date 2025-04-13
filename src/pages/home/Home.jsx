import React from 'react'
import Hero from './Hero'
import WhyChoose from './WhyChoose'
import Procuts from '../shop/Procuts'
import Expricences from './Expricences'
import Materials from './Materials'
import Testimonial from './Testimonial'

const Home = () => {
  return (
    <>
    <Hero />
    <WhyChoose/>
    <Procuts headline = "Best selling product"/>
    <Expricences/>
    <Materials/>
    <Testimonial/>
    </>
  )
}

export default Home