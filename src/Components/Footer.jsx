import React from 'react'
import svg1 from '../assets/svgs/svg-3.svg'
import svg2 from '../assets/svgs/svg-2.svg'
const Footer = () => {
  return (
    <div className=' relative w-full bg-yellow-200 min-h-min p-4 text-center text-gray-700'>
      <div className='m-auto w-9/12 align-middle items-center'>
      <div className='mb-6 font-bold'>We'd Love See you again </div>
      <div className='inline-block w-full mb-3 divide-x-2 divide-gray-100'>
        <div className='mr-2'>Address: Coscharis plaza no 3</div>
        <div className='pl-2'>Follow Us on Facebook | twitter | instagram |</div>
        <div>You can also Email us at : templatestores@gmail.com</div>
      </div>
      <div className='text-white bg-yellow-400 p-2 rounded-full w-80 m-auto border cursor-pointer border-gray-400'>Give FeedBack</div>
      <div className='text-sm mt-3'>2022 All Rights Reserved</div>
      <div className='absolute top-10 opacity-30 rotate-45'><img src={svg1} alt="ima" style={{width:"50px"}}/></div>
      <div className='absolute top-14 right-24 opacity-25 -rotate-45'><img src={svg1} alt="ima" style={{width:"50px"}}/></div>
      <div className='absolute bottom-4 opacity-30 rotate-45'><img src={svg2} alt="ima" style={{width:"50px"}}/></div>
      <div className='absolute bottom-4 opacity-30 -rotate-45 right-24'><img src={svg2} alt="ima" style={{width:"50px"}}/></div>
    </div>
    </div>
  )
}

export default Footer
