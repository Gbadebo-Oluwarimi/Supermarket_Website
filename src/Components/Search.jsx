import React from 'react'
import Popupa from './Popupa'
import { useSelector, useDispatch } from 'react-redux'
import { updatePopup } from '../features/stateChangeSlice'
const Search = () => {
  const dispatch = useDispatch();
  const { popup } = useSelector((state) => state.changestate)
  return (
    <div className='md:justify-between  md:w-2/4 ml-16 md:text-sm md:flex bg-gray-100 p-3 rounded-md text-gray-600 hidden'>
    <div className=' flex justify-between'>
    <div className='relative pr-3 flex items-center justify-between w-32 divide-x divide-gray-600'>
        All items
        <div onClick={() => dispatch(updatePopup())} ><svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="cursor-pointer w-4 h-4">
<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
{ popup && <div className='absolute top-9 z-20 -left-3'><Popupa/></div>}
</div>
    </div>
    <div><input type="text" className="w-80 bg-transparent outline-none pl-3" placeholder="I'm Searching For...."/></div>
   </div>
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>

   </div>
  )
}

export default Search