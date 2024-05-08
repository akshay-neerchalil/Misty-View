import React from 'react'
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useNavigate } from 'react-router-dom';


const Home = () => {

  const navigate = useNavigate();

  const moveToAccomodation = ()=>{
    navigate("/accomodation")
  }

  const moveToGallery = ()=>{
    navigate("/gallery")
  }
  
  return (
    <Box component="section" sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      backgroundImage: "url('http://mistyview.in/wp-content/uploads/2022/09/Misty-View-09.jpg')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    }}>

      <Box component="div" sx={{display:"flex",flexDirection:"column",alignItems:"center",mb:"6%"}}>

      <Box component="section" sx={{
         display: "flex",
         flexDirection: "column",
         justifyContent: "center",
        
      }}>

        <Typography variant="h3"  sx={{fontFamily:"sans-serif",color:"white",fontWeight:"bold"}}>Explore Kodai..</Typography>
        </Box>
        <Box component="div" sx={{display:"flex",gap:"20px 50px",paddingTop:"10px"}}>
      <Typography variant="h6"  component="div" color="white" sx={{cursor:"pointer","&:hover":{color:"orange"}}}>
      Home
    </Typography>
    <Typography variant="h6" color="white" component="div" sx={{cursor:"pointer","&:hover":{color:"orange"}}} onClick={moveToAccomodation} >
      Accomodation
    </Typography>
    <Typography variant="h6" color="white" component="div" sx={{cursor:"pointer","&:hover":{color:"orange"}}} onClick={moveToGallery} >
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

        <Box component="div" sx={{display:"flex"}}>
        <Typography variant='h1'sx={{fontWeight:"bold",color:"white",fontFamily:"sans-serif"}}>Lovedale</Typography>
        </Box>
        <Box component="div" sx={{display:"flex"}}>
        <Typography variant='h6' sx={{color:"white"}}>Best Budget Friendly Resort & Mud House in Kodaikanal</Typography>
        </Box>
        <Box component="div" sx={{display:"flex",flexDirection:"column",paddingTop:"20px"}}>
        <Button variant="contained"><WhatsAppIcon/>MAKE AN ENQUIRY</Button>
        </Box>



        </Box>
  </Box>
  )
}

export default Home