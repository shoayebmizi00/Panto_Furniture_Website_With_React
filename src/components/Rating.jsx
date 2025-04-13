import React from 'react';
import { TiStar } from "react-icons/ti";;

const Rating = ({rating}) => {
    const totalStarts = 5;
  return (
    <div className='flex space-x-1'>
        {Array.from({length: totalStarts}, (_, index) => {
        const starIndex = index + 1;
        return starIndex <= rating ? (<TiStar key={index} className='text-yellow-500'/>) : (<TiStar key={index} className='text-gray-300'/>);
    })}
    </div>
  )
}

export default Rating;
