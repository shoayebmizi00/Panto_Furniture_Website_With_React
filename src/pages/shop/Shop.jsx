import React from 'react'
import bannerImg from "../../assets/banner.png"
import Products from "./Procuts"

const Shop = () => {
  return (
    <section className='min-h-screen'>
      {/* banner */}
      <div style={{ backgroundImage: `url(${bannerImg})` }} className='width-full h-[400px] bg-cover bg-center flex items-center justify-center text-white pb-20'>

        <h1 className='text-4xl font-bold '>Shop Our Products</h1>
      </div>
      <Products headline = "What's Your choice?"/>
    </section>
  )
}

export default Shop