import React from 'react'
import { useDispatch } from 'react-redux'
import { comingsoon } from '../features/stateChangeSlice'
const Navlinks = ({msg, svg}) => {
  const dispatch = useDispatch()
  return (
    <div onClick={() => dispatch(comingsoon())} className='md:flex items-center transition ease-in duration-200 ml-3 sm:hidden hover:bg-gray-200 px-2 rounded-full cursor-pointer'>
   {svg}
        <div>{msg}</div>
    </div>
  )
}

export default Navlinks