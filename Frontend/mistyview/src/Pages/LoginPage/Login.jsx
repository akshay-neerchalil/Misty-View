import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import { useForm } from 'react-hook-form'
import { userLogin } from '../../Service/Service';
import { Navigate, useNavigate } from 'react-router-dom';



const Login = () => {

  const {register,handleSubmit,error} = useForm();

  const navigate = useNavigate()

  const moveToRegiester = () => {
    navigate("/register")
  }




  //FUNCTION TO LOGIN

  const login = async(data) =>{
   try{
  //   console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",register);
  //   const response = await userLogin(data)
  //   console.log(response.data);
    navigate("/home")
   }
   catch(eror){
    console.log("error",error);
   }
  }

  

  return (
    <Box component="div" sx={{display:"flex",flexDirection:"column",backgroundColor:"#ce39f3",height:"100vh",justifyContent:"center",alignItems:"center",}}>
        <Box component="div" sx={{display:"flex",flexDirection:"column",backgroundColor:"white",height:"60vh",width:"40%",boxShadow:" 0px 0px 12px 0px rgba(232,25,232,1);",WebkitBoxShadow:"0px 0px 12px 0px rgba(232,25,232,1);",borderRadius:"6px"}}>
          <form onSubmit={handleSubmit(login)}>
            <Box component="div" sx={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
            <Typography color="red" sx={{fontFamily:"sans-serif",fontSize:"50px"}}>L</Typography><Typography sx={{fontFamily:"sans-serif",fontSize:"25px"}}>ogin</Typography>
            </Box>
            <Box component="div" sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center", paddingTop:"10px"}}>
            <TextField id="outlined-basic" label="Email" variant="outlined" size='small' sx={{width:"50%",backgroundColor:"#e6e6e6",borderRadius:"5px"}} {...register('email')}/>
            </Box>
            <Box component="div" sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center", paddingTop:"10px"}}>
            <TextField id="outlined-basic" label="Password" variant="outlined" size='small' sx={{width:"50%",backgroundColor:"#e6e6e6",borderRadius:"5px"}} {...register('password')}/>
            </Box>
            <Box component="div" sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center", paddingTop:"10px"}}>
            <Button type="submit" variant="contained"  sx={{width:"50%",backgroundColor:"#6fb555",borderRadius:"5px" ,"&:hover":{backgroundColor:"green"}}}>Login</Button>
            </Box>
            </form>
            <Box component="div" sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center", paddingTop:"10px"}}>
            <Button variant="contained"  sx={{width:"50%",borderRadius:"5px"}}><GoogleIcon></GoogleIcon>Continue With Google</Button>
            </Box>
            <Box component="div" sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center", paddingTop:"10px"}}>
             <Typography sx={{color:"grey"}}>Didn't have an account.?</Typography>
            </Box>
            <Box component="div" sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center", paddingTop:"10px"}}>
            <Typography sx={{color:"#1976d2",cursor:"pointer"}} onClick={moveToRegiester}>SignUp Now</Typography>
            </Box>
            
        </Box>
    </Box>
  )
}

export default Login