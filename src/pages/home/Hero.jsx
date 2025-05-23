import React from 'react'
import bannerImg from '../../assets/banner.png'
import { FaSearch } from 'react-icons/fa'
import TooltipButton from '../../components/TooltipButton'

const Hero = () => {
  return (
    <section className='h-screen relative bg-cover bg-center text-white' style={{backgroundImage:`url(${bannerImg})`}}>
        <div className='md:pt-32 pt-22 text-center space-y-5 md:w-1/2 mx-auto px-2'>
            <h1 className='text-4xl lg:text-6xl font-medium lg:leading-snug'>
                Make your interior more minimalist & modern
            </h1>
            <p className='text-lg font-normal lg:w-1/2 mx-auto'>
                Turn your room into panto into a lot more minimalist and modern with ease and speed
            </p>

            {/* Search field */}
            <div className='relative inline-block z-30'>
                <input type="text" placeholder='Search furniture' className='w-full md:w-80 px-6 py-2 bg-white/25 rounded-full text-white border border-gray-300 focus:outline-none placeholder:text-white'/>
                <div className="absolute top-1/2 right-3 transform -translate-y-1/2 flex items-center justify-center bg-primary h-8 w-8 rounded-full text-white cursor-pointer">
                    <FaSearch/>
                </div>
            </div>
        </div>

        {/* Bottom blur effect */}
        <div className='absolute inset-x-0 bottom-0 h-3/4 -mb-2 bg-gradient-to-t from-white via-transparent to-transparent blur-sm'></div>

        {/* Keep First Two Tooltips As They Are */}
        <div className='hidden xl:block absolute bottom-40 left-24'>
            <TooltipButton position="bottom"/>
        </div>

        <div className='hidden xl:block absolute top-40 left-24'>
            <TooltipButton position="top"/>
        </div>
    </section>
  )
}

export default Hero
