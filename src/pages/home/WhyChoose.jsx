import React from 'react'
import MoreInfoBtn from '../../components/MoreInfoBtn'


const WhyChoose = () => {
  return (
    <section className='section-container'>
        <div className='my-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-12 text-left gap-10 items-center'>
            <div>
                <h2 className='text-4xl font-bold'>Why <br/> Choosing us</h2>
            </div>
            <div>
                <h3 className='text-2xl font-semibold mb-3'>Luxury facilities</h3>
                <p className='text-base mb-2'>The advantage of hiring a workspace with us is that gives you comfortable sevice and all-around facilities.</p>
                <MoreInfoBtn text="more info"/>
            </div>
            <div>
                <h3 className='text-2xl font-semibold mb-3'>Affordable Price</h3>
                <p className='text-base mb-2'>The advantage of hiring a workspace with us is that gives you comfortable sevice and all-around facilities.</p>
                <MoreInfoBtn text="more info"/>
            </div>
            <div>
                <h3 className='text-2xl font-semibold mb-3'>Many Choices</h3>
                <p className='text-base mb-2'>The advantage of hiring a workspace with us is that gives you comfortable sevice and all-around facilities.</p>
                <MoreInfoBtn text="more info"/>
            </div>
        </div>
    </section>
  )
}

export default WhyChoose
