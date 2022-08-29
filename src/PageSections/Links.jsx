import React from 'react'
import '../Styles/PageStyles/Links.css'
import { useSelector, useDispatch } from 'react-redux'
import  svgimg  from '../assets/svgs/svg-001.svg'
import Product from '../Components/Product'
import svgimg2 from '../assets/svgs/svg-3.svg'
import svgimg3 from '../assets/svgs/sbg-003-b.svg'
import svgimg5 from '../assets/svgs/svg-002-f.svg'
import svgimg6 from '../assets/svgs/svg-6.svg'
import svgimg1 from '../assets/svgs/svg-1.svg'
import svgcos from '../assets/svgs/svg-cos.svg'
import svgimg10 from '../assets/svgs/svg-006-d.svg'
import svgimg9 from '../assets/svgs/svg-004-g.svg'
import svgimg8 from '../assets/svgs/svg-005-t.svg'
import { comingsoon } from '../features/stateChangeSlice'
// import lens from '../assets/images/img-5.png'
const Links = () => {
        const dispatch = useDispatch();
        const { items } = useSelector((state) => state.add);
  return (
    <div className='m-auto max-w-6xl mt-16'>
        <div className='flex sitems-center'>
            <div className='flex items-center '>
        <div className='font-semibold text-xl text-gray-800'>Browse By Category</div>
        <div className=' text-gray-500 text-center text-xs ml-4'>All cateogries</div>
        </div>
        </div>
        <div className='flex m-auto max-w-4xl mt-10 mb-10 flex-wrap align-middle items-center w-full'>
            <div onClick={() => dispatch(comingsoon())} className='mx-2 my-2 inline-block p-4 w-24 h-32 rounded-md items-center hover:shadow-pink-500 hover:shadow-2xl hover:bg-slate-50 cursor-pointer transition duration-300 ease-in-out  text-center align-middle bg-gray-400 bg-opacity-20'>
                    <div className='items-center m-auto w-10 h-14 mb-1'><img src={svgimg5} alt='svg' className=""/></div>
                    <div className='text-gray-700 text-xs text-center'>Fruits </div>
            </div>

            <div onClick={() => dispatch(comingsoon())} className=' mx-2 my-2 md:inline-block p-4 w-24 h-32 rounded-md items-center hover:shadow-gray-500 hover:shadow-2xl hover:bg-slate-50 cursor-pointer transition duration-300 ease-in-out text-center align-middle bg-gray-400 bg-opacity-20'>
                    <div className='items-center m-auto w-10 h-14 mb-1'><img src={svgimg2} alt='svg' className=""/></div>
                    <div className='text-gray-700 text-xs text-center'>Foods</div>
            </div>

            <div onClick={() => dispatch(comingsoon())} className='mx-2 my-2 md:inline-block p-4 w-24 h-32 rounded-md items-center hover:shadow-red-400 text-center hover:shadow-2xl hover:bg-slate-50 cursor-pointer transition duration-300 ease-in-out align-middle bg-gray-400 bg-opacity-20'>
                    <div className='items-center m-auto w-10 h-14 mb-1'><img src={svgimg10} alt='svg' className=""/></div>
                    <div className='text-gray-700 text-xs text-center'>Drinks And Smoothies</div>
            </div>

            <div onClick={() => dispatch(comingsoon())} className='mx-2 my-2 inline-block p-4 w-24 h-32 rounded-md items-center text-center hover:shadow-yellow-500  hover:shadow-2xl hover:bg-slate-50 cursor-pointer transition duration-300 ease-in-out align-middle bg-gray-400 bg-opacity-20'>
                    <div className='items-center m-auto w-10 h-14 mb-1'><img src={svgcos} alt='svg' className=""/></div>
                    <div className='text-gray-700 text-xs text-center'>Cosmetics</div>
            </div>

            <div onClick={() => dispatch(comingsoon())} className=' mx-2 my-2 inline-block p-4 w-24 h-32 rounded-md items-center hover:shadow-violet-500 text-center hover:shadow-2xl hover:bg-slate-50 cursor-pointer transition duration-300 ease-in-out align-middle bg-gray-400 bg-opacity-20'>
                    <div className='items-center m-auto w-10 h-14 mb-1'><img src={svgimg3} alt='svg' className=""/></div>
                    <div className='text-gray-700 text-xs text-center'>Baby Products</div>
            </div>

            <div onClick={() => dispatch(comingsoon())} className='mx-2 my-2 inline-block p-4 w-24 h-32 rounded-md items-center hover:shadow-violet-500 text-center hover:shadow-2xl hover:bg-slate-50 cursor-pointer transition duration-300 ease-in-out align-middle bg-gray-400 bg-opacity-20'>
                    <div className='items-center m-auto w-10 h-14 mb-1'><img src={svgimg9} alt='svg' className=""/></div>
                    <div className='text-gray-700 text-xs text-center'>Groceries</div>
            </div>

            <div onClick={() => dispatch(comingsoon())} className='mx-2 my-2 inline-block p-4 w-24 h-32 rounded-md items-center hover:shadow-blue-500 text-center hover:shadow-2xl hover:bg-slate-50 cursor-pointer transition duration-300 ease-in-out align-middle bg-gray-400 bg-opacity-20'>
                    <div className='items-center m-auto w-10 h-14 mb-1'><img src={svgimg} alt='svg' className=""/></div>
                    <div className='text-gray-700 text-xs text-center'>Fashion</div>
            </div>

            <div onClick={() => dispatch(comingsoon())} className='mx-2 my-2 inline-block p-4 w-24 h-32 rounded-md items-center text-center hover:shadow-2xl hover:bg-slate-50 cursor-pointer transition duration-300 ease-in-out align-middle bg-gray-400 bg-opacity-20'>
                    <div className='items-center m-auto w-10 h-14 mb-1'><img src={svgimg8} alt='svg' className=""/></div>
                    <div className='text-gray-700 text-xs text-center'>Appliances</div>
            </div>
        </div>
        <div className='flex align-bottom items-center mb-10'>
            <div className='font-semibold text-xl text-gray-800 mr-7'>Trending Products</div>
            <div className='text-xs text-gray-500'>All features </div>
        </div>


        {/* product section */}
        <div className='flex'>
        <div className='flex justify-around mb-5 flex-wrap w-full'>
                {items && items.map((item) => (
                        <div key={item.id}>
                                <Product id={item.id} title={item.title} price={item.price} images={`url('${item.img}')`}/>
                        </div>
                ))}
        </div>
        </div>
    </div>
  )
}

export default Links