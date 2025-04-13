import React from 'react'
import materialsImg1 from '../../assets/material1.png'
import materialsImg2 from '../../assets/material2.png'
import materialsImg3 from '../../assets/material3.png'
import MoreInfoBtn from '../../components/MoreInfoBtn'

const Materials = () => {
  return (
    <section className='section-container my-24 flex flex-col md:flex-row items-center justify-between md:gap-20 gap-8 '>
        <div className='md:w-1/2 mx-auto '>
          <h3 className='text-lg font-semibold text-primary mb-4'>MATERIALS</h3>
          <h2 className='capitalize text-4xl font-bold lg:w-1/2 mb-4'>Very serious Materials For Making Furniture</h2>
          <p className='text-secondary dark:text-white mb-5 lg:w-1/2 '>Because panto was very serious about designing furniture for our environment, using a very expensive nd famous capital but at a relatively low price</p>
          <MoreInfoBtn text="More Info"/>
        </div>
        <div className='md:w-1/2  grid grid-cols-2 md:grid-cols-3 md:items-end'>
            <div>
                <img src={materialsImg1} alt="" />
                <img src={materialsImg2} alt="" />
            </div>
            <div className='md:col-span-2 col-span-1'>
                <img src={materialsImg3} alt="" className='w-full md:h-[541px]'/>
            </div>
        </div>
      
    </section>
  )
}

export default Materials
