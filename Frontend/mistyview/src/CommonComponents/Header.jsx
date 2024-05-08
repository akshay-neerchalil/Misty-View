import { Box, Typography } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <Box sx={{display:"flex",height:"15vh",alignItems:"center",justifyContent:"center"}}>
      <Typography sx={{fontFamily:"sans-serif",fontSize:"50px",color:"orange"}}>Lovedale</Typography>
    </Box>
  )
}

export default Header