import React from 'react'
import '../Styles/ComponentStyles/Comingsoon.css'
import { comingsoon } from '../features/stateChangeSlice'
import { useDispatch } from 'react-redux'
import pyramid from '../assets/svgs/pyramids.svg'
const Comingsoon = () => {
  const dispatch = useDispatch()
  return (
    <div className='c-main1'>
      <div className='c-main2'>
        <div className='flex justify-between'>
      <div className='leading-4 text-2xl'> <span className='text-yellow-400'>Site in Progress ...</span>🚧</div>
      <div className='cursor-pointer'onClick={() => dispatch(comingsoon())}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

</div>

            </div>
        {/* <div className='text-xs'>
          Some Features On this site has been disabled e.g Links to certain pages, checkout Payment e.t.c
          Contact oluwarimigbdebo@gmail.com to enable them
        </div> */}
        <div className='w-full text-center mt-4'>
        <lord-icon
      src="https://cdn.lordicon.com/dlqgrmty.json"
      trigger="loop"
      delay="1400"
      colors="primary:#121331,secondary:#e8e230"
      style={{width:"300px", height:"300px"}}>
</lord-icon>
        {/* <img src={pyramid} alt="pyramid"/> */}
           <div className='text-md font-bold mb-2'> This Page is under contruction </div>
           <div className='text-sm'> Some Functions like Checkout, Delivery, Pickup <br></br>And Search Functionality Might not work</div>
           </div>
           <div className='absolute text-xs bottom-0 right-1 p-2'><span className='text-yellow-500'>Contact</span>:oluwarimigbadebo@gmail.com</div>
      </div>
    </div>
  )
}

export default Comingsoon
