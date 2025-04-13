import React from 'react'
import { getImgUrl } from "../../utils/getImgURL"
import Rating from '../../components/Rating'
import { FaPlus } from "react-icons/fa6";


const ProductCard = ({product}) => {
  return (
    <div>
      <div className='bg-[#FAFAFA}'>
        <img src={getImgUrl(`${product.imageUrl}`)} alt={product.name || 'Product Image'}/>
      </div>
      <div className='p-6 bg-white dark:bg-black shadow-sm'>
        <h4 className='text-base mb-1'>{product.category}</h4>
        <h3 className='font-semibold text-xl mb-2'>{product.name}</h3>
        <Rating rating={product.rating}/>
        <div className='mt-5 flex justify-between items-center'>
          <p className='text-secondary dark:text-white font-bold text-lg'>$<span>{product.price}</span></p>
          <button className='bg-secondary text-white p-2 rounded-full hover:bg-primary transition duration-300 ease-in-out'>
            <FaPlus/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
