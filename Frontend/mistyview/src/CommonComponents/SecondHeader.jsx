import { Box, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const SecondHeader = () => {

   const navigate = useNavigate();

   const moveToHome = ()=>{
    navigate("/home")
   }

   const moveToGallery = ()=>{
    navigate("/gallery")
   }

   const moveToAccomodation = ()=>{
    navigate("/accomodation")
   }
  return (
    <Box sx={{display:"flex",backgroundColor:"black",height:"10vh",alignItems:"center",justifyContent:"center"}}>
             <Box component="div" sx={{display:"flex",gap:"20px 50px",paddingTop:"10px"}}>
      <Typography variant="h6"  component="div" color="white" sx={{cursor:"pointer","&:hover":{color:"orange"}}} onClick={moveToHome}>
      Home
    </Typography>
    <Typography variant="h6" color="white" component="div" sx={{cursor:"pointer","&:hover":{color:"orange"}}} onClick={moveToAccomodation} >
      Accomodation
    </Typography>
    <Typography variant="h6" color="white" component="div" sx={{cursor:"pointer","&:hover":{color:"orange"}}} onClick={moveToGallery}>
      Gallery
    </Typography>
    <Typography variant="h6" color="white" component="div" sx={{cursor:"pointer","&:hover":{color:"orange"}}} >
      Things to do
    </Typography>
    <Typography variant="h6" color="white" component="div" sx={{cursor:"pointer","&:hover":{color:"orange"}}}>
      About Us
    </Typography>
    <Typography variant="h6" color="white" component="div" sx={{cursor:"pointer","&:hover":{color:"orange"}}} >
      Contact Us
    </Typography>
        </Box>
    </Box>
  )
}

export default SecondHeader