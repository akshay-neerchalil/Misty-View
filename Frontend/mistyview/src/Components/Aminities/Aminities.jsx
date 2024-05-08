import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const Aminities = () => {
  return (
    <Box component="div" sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100vh"}}>

        <Box component="div" sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <Typography sx={{fontFamily:"sans-serif",fontSize:"50px"}}>Amenities</Typography>

            <Typography  sx={{fontFamily:"sans-serif",fontSize:"20px"}}>Providing Hospitality the Correct Way
</Typography>
        </Box>
        <Stack direction="row" spacing={3} sx={{paddingTop:"20px"}}>
 <Box component="div" sx={{display:"flex",flexDirection:"column",alignItems:"center"}}><img src='https://mistyview.in/wp-content/uploads/2022/09/Asset-14.png' style={{height:"100px"}}></img><Typography>Wifi</Typography></Box>
 
 <Box component="div" sx={{display:"flex",flexDirection:"column",alignItems:"center"}}><img src='https://mistyview.in/wp-content/uploads/2022/09/Asset-13-1.png' style={{height:"100px"}} ></img><Typography>Toiletries</Typography></Box>
 
 <Box component="div" sx={{display:"flex",flexDirection:"column",alignItems:"center"}}><img src='https://mistyview.in/wp-content/uploads/2023/03/tracking-512-150x150.webp' style={{height:"100px"}}></img><Typography>Tracking</Typography></Box>

 <Box component="div" sx={{display:"flex",flexDirection:"column",alignItems:"center"}}><img src='	https://mistyview.in/wp-content/uploads/2022/09/Asset-11-1.png' style={{height:"100px"}}></img><Typography>Car Parking</Typography></Box>

 <Box component="div" sx={{display:"flex",flexDirection:"column",alignItems:"center"}}><img src='https://mistyview.in/wp-content/uploads/2022/09/Asset-12-1.png' style={{height:"100px"}}></img><Typography>Kitchen Fecility</Typography></Box>

 <Box component="div" sx={{display:"flex",flexDirection:"column",alignItems:"center"}}><img src='https://mistyview.in/wp-content/uploads/2022/09/Asset-15.png' style={{height:"100px"}}></img><Typography>Room Service</Typography></Box>

 <Box component="div" sx={{display:"flex",flexDirection:"column",alignItems:"center"}}><img src='https://mistyview.in/wp-content/uploads/2022/09/Asset-9-1-124x150.png' style={{height:"100px"}}></img><Typography>24*7 Hot Water</Typography></Box>


</Stack>

    </Box>
  )
}

export default Aminities