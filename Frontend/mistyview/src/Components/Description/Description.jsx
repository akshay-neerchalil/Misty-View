import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import CallIcon from '@mui/icons-material/Call';

const Description = () => {
  return (
    <Box component="div" sx={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        height:"100vh"
        }}>
        <Box component="div" sx={{display:"flex",gap:"20px 50px",width:"80%"}}>

            <Box component="div" sx={{backgroundImage: "url('https://mistyview.in/wp-content/uploads/2022/09/Misty-View-03-1.jpg')",minHeight:"50vh",width:"50%", backgroundSize: "cover",}}>
              
            </Box>
            <Box component="div" sx={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
                
                <Typography sx={{fontFamily:"sans-serif",fontSize:"30px"}}>Welcome To The Last Village Kilavarai,Kodaikanal</Typography>
               
                
                <Typography sx={{paddingTop:"20px"}}>Searching for a place to escape the hectic city life?</Typography>
                <Typography>Looking for a place to reconnect with nature and yourselves?</Typography>
                
               
                <Typography sx={{paddingTop:"20px"}}>Recharge after a stressful work week with all the comforts of home, being completely in nature.</Typography>
                
                
                <Typography sx={{paddingTop:"20px",fontFamily:"sans-serif",fontSize:"20px"}}>Yes! the Mud B provided by Neerchalil Group is the best option for you.</Typography>

                <Box>
        <Button variant="contained" sx={{width:"40%",marginTop:"20px",backgroundColor:"orange","&:hover":{color:"black",backgroundColor:"orange"}}}><CallIcon/>MAKE AN ENQUIRY</Button>
               
                </Box>

            </Box>

        </Box>

       </Box>

    
  )
}

export default Description