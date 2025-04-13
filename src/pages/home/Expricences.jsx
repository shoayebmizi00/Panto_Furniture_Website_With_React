import React from 'react'
import expricencesImg from '../../assets/expricences.png'
import MoreInfoBtn from '../../components/MoreInfoBtn'

const Experience = () => {
  return (
    <section className='section-container my-24 flex flex-col md:flex-row items-center justify-between md:gap-20 gap-8 '>
        <div className='md:w-1/2 md:h-[541px] '>
            <img src={expricencesImg} alt="" className='h-full w-full'/>
        </div>
        <div className='md:w-1/2 mx-auto '>
          <h3 className='text-lg font-semibold text-primary mb-4'>EXPENCES</h3>
          <h2 className='capitalize text-4xl font-bold lg:w-1/2 mb-4'>We provide you the best experience</h2>
          <p className='text-secondary dark:text-white mb-5 lg:w-2/3 '>You dont't have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>
          <MoreInfoBtn text="More Info"/>
        </div>
      
    </section>
  )
}

export default Experience
