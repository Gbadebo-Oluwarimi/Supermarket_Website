import { useDispatch } from 'react-redux'
import  {addToCart}  from '../features/addToCartSlice'
import React from 'react'
const Product = ({title, price, images, option, id}) => {
  const dispatch = useDispatch();
  return (
    <div>
       <div className='inline-block items-center align-middle bg-gray-50 p-2 rounded-lg mb-2'>
                <div className='imagecont' style={{
                    backgroundImage:`${images}`
                }}>
                </div>
            <div className='flex justify-between items-center m-3'>
               <div className='mr-2'>
               <div className='font-bold text-sm'>{price}</div>
                <div className='header1 font-normal text-xs'>{title}</div>
               
                </div>
                <div><button onClick={() => dispatch(addToCart(id))} className='transition ease-out duration-200  border-gray-50 border-2 focus:ring-2 focus:ring-yellow-300  text-sm m-1 bg-yellow-500 mt-1 p-2 rounded-md text-slate-50'>Add to Cart</button></div>
        </div>
        <div className='text-xs p-1 px-2 m-2 bg-sky-100 rounded-sm text-sky-500 w-max'>{option}</div>
            </div>
    </div>
  )
}

export default Product
