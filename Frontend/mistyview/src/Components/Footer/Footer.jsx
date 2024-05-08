import { Box, Typography } from '@mui/material'
import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

const Footer = () => {
  return (
    <Box component="div" sx={{display:"flex",flexDirection:"column",backgroundColor:"#11202a",height:"100vh",justifyContent:"center",alignItems:"center",marginTop:"15px"}}>
      <Typography variant='h1'sx={{fontWeight:"bold",color:"Orange",fontFamily:"sans-serif"}}>Lovedale</Typography>
      <Box component="div" sx={{display:'flex'}}>
      <Box>
     <FacebookOutlinedIcon sx={{color:"orange",fontSize:80}}/>
     </Box>
     <Box>
     <PublicOutlinedIcon sx={{color:"orange",fontSize:80}}/>
     </Box>
     </Box>
    <Typography sx={{color:"white"}}>< LocalPhoneOutlinedIcon sx={{color:"white",fontSize:30}}/>9746090254</Typography>
    </Box>
  )
}

export default Footer