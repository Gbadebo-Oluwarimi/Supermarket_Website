import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../Styles/ComponentStyles/Addtocart.css'
import { productsState } from '../features/stateChangeSlice'
// import { useEffect } from 'react'
// import { findalladded } from '../features/addToCartSlice'
const Addtocart = () => {
    const dispatch = useDispatch()
    const { added } = useSelector(state => state.add)
    console.log(added.found)
    // const dispatch = useDispatch()
  return (
    <div className='main'>
        <div className='main2'>
            <div className='flex justify-between'>
      <div className='leading-4 text-2xl'>Checkout <span className='text-yellow-400'>Items</span></div>
      <div onClick={() => dispatch(productsState())} className='cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

</div>
            </div>
         
           <div className='sm:flex inline-block w-full'>
            
            <div className='w-full sm:w-9/12'>
            <div className=' bg-gray-50 flex justify-between w-full px-3 mt-4 rounded-sm mb-2 font-bold'>
                <div>Item Image</div>
                <div>Item</div>
                <div>Price</div>
                <div>Shipping</div>
           </div>
            { added && added.map(add =>
            <div  key={ add.id } className='inline-block md:flex md:justify-between w-full'>
            <div className='inline-block p-2 w-full '>
                <div className='flex justify-between items-center py-2 bg-gray-50 px-3 rounded-md w-full'>
                    <div className='flex justify-between'>
                   <img src={add.img} alt="img" style={{width:"100px", height:":100px"}}/>
                    </div>
                    <div className='text-lg  w-40'>{add.title}</div>
                    <div className='text-md  w-20'>{add.price}</div>
                    <div className='f'>Pickup</div>
                    
                </div>
            </div>
            </div>
            )}
            </div>
          
            <div className='w-full mt-2 sm:w-2/4 ml-4 relative text-center'>
              checkout Section
            <lord-icon
      src="https://cdn.lordicon.com/dlqgrmty.json"
      trigger="loop"
      delay="1400"
      colors="primary:#121331,secondary:#e8e230"
      style={{width:"300px", height:"300px"}}>
</lord-icon><br></br>
This Section is Under Contruction
              </div>
            </div>
      </div>
    </div>
  )
}

export default Addtocart
