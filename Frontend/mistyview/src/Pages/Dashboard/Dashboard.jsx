import React from 'react'
import Home from '../../Components/Home/Home'
import Description from '../../Components/Description/Description'
import Aminities from '../../Components/Aminities/Aminities'
import Footer from '../../Components/Footer/Footer'


const Dashboard = () => {
  return (
    <div>
        <Home />
        <Description/>
        <Aminities/>
        <Footer/>
    </div>
  )
}

export default Dashboard