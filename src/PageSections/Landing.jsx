import React from 'react'
import Navbar from '../Components/Navbar'
import '../Styles/PageStyles/Landing.css'

const Landing = () => {
  return (
    <div>
      <Navbar/>
      <div className='landing bg-slate-400 w-full'>
         <div className=' gap-x-11  m-auto max-w-7xl md:flex p-3 pt-4 inline-block w-full'>
            <div className='inline-block w-full  background sm:flex rounded-md md:w-8/12 h-96 bg-slate-200 p-0 overflow-hidden'>
             
              <div className='w-80 text-2xl text-gray-600 ml-14 mt-10'>
                <div className='p-1 bg-gray-400 text-xs rounded-xl w-32 text-center mb-1'>Our new products</div>
                <div className='font-semibold mb-8'>Active Summer With Energy Drink <span className='text-yellow-500'>300ml</span></div>
                <div className='text-sm leading-7 mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing e</div>
                <button className='text-sm p-2 bg-white rounded-sm border-transparent border-2 text-semibold w-32 focus:ring-2 focus:sring-sky-400'>Shop Now</button>
              </div>
              <div className='bg-img w-8/12 bg-no-repeat relative rotate-6 bg-center bottom-0'>

              </div>
            </div>
            <div className='relative w-full mt-10 md:mt-0 rounded-md md:w-1/3 h-96 bg-yellow-300 p-1 overflow-hidden '>
           <div className='absolute top-7 rotate-180 right-10'>
            <lord-icon
    src="https://cdn.lordicon.com/xxdqfhbi.json"
    trigger="loop"
    delay="1000"
    colors="primary:#4bb3fd,secondary:#ffc738,tertiary:#f28ba8,quaternary:#f24c00,quinary:#121331"
    style={{width:"100px", height:"100px"}}>
</lord-icon>
</div>
              <div className='font-semibold text-2xl text-gray-800 mt-10 ml-10 tracking-wide inline-block'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
</svg>
20% SALE OFF</div>
              <div className='text-xs mt-10 w-72 ml-10 text-gray-600 leading-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
              <div className='images'></div>
            </div>
         </div>
      </div>
      </div>
  )
}

export default Landing