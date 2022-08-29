import React from 'react'
import Landing from './Landing'
import Links from './Links'
import '../Styles/PageStyles/Homepage.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Components/Footer'

const HomePage = () => {
  return (
    <div>
       <ToastContainer/>
        <Landing/>
        <Links/>
        <Footer/>
    </div>
  )
}

export default HomePage