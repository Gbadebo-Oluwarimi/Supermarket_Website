import React from 'react'
import Landing from './Landing'
import Links from './Links'
import '../Styles/PageStyles/Homepage.css'
import Footer from '../Components/Footer'
const HomePage = () => {
  return (
    <div>
        <Landing/>
        <Links/>
        <Footer/>
    </div>
  )
}

export default HomePage