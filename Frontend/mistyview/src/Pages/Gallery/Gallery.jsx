import React from 'react'
import { galleryDetails } from '../../Dummydata/Dummydata'
import Gallerycard from '../../CommonComponents/Gallerycard'
import { Box } from '@mui/material'

const Gallery = () => {
  return (
    <Box component="div" sx={{display:"flex",justifyContent:'center',flexWrap:'wrap',gap:'20px',marginTop:'35px'}}>
    {galleryDetails.map((data, index) => (
    <Gallerycard key={index} data={data}/>
    ))}
    </Box>
   
  )
}

export default Gallery