import React from 'react'
import Header from '../CommonComponents/Header'
import SecondHeader from '../CommonComponents/SecondHeader'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import Footer from '../Components/Footer/Footer'

const Pagelayout = () => {
  return (
<Box sx={{display:"flex",flexDirection:"column"}}>
    <Header/>
    <SecondHeader/>
    <Outlet/>
    <Footer/>
    </Box>  
  )
}

export default Pagelayout