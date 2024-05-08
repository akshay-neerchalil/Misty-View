import React from 'react'
import Footer from '../Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import Description from '../Components/Description/Description'
import Aminities from '../Components/Aminities/Aminities'

const Applayout = () => {
  return (
    <Box sx={{display:"flex",flexDirection:"column"}}>
    <Outlet/>
    <Description/>
    <Aminities/>
    <Footer/>
    </Box>  
    
  )
}

export default Applayout