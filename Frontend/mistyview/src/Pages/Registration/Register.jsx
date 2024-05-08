import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'



const Register = () => {



  const submit = ()=>{
    console.log("data sented");
  }


  let userSchema = yup.object({
    name:yup.string().required("Name is required").min(3,"Name must be at least 3 characters").max(20,"Name must not exceed 20 characters"),
    email:yup.string().required("email is required").email("Invalid format"),
    address:yup.string().required("Address is required"),
    phoneNumber:yup.string().required("Phone number is required").min(10, "Phone number must be at least 10 digits").max(12,  "Phone number cannot exceed 12 digits"),
    password:yup.string().required("Password is required"),
    // confirmPassword:string().required("Confirm password is required").oneOf([string().ref('password'), null], 'Passwords must match')
  })

  const {register,handleSubmit,formState} = useForm({resolver: yupResolver(userSchema) });

  const {errors,touchedFields,dirtyFields} = formState;


    


  return (
    <Box component="div" sx={{display:"flex",flexDirection:"column",backgroundColor:"#ce39f3",height:"100vh",justifyContent:"center",alignItems:"center",}}>
    <Box component="div" sx={{display:"flex",flexDirection:"column",backgroundColor:"white",height:"70vh",width:"40%",boxShadow:" 0px 0px 12px 0px rgba(232,25,232,1);",WebkitBoxShadow:"0px 0px 12px 0px rgba(232,25,232,1);",borderRadius:"6px"}}>
      <form onSubmit={handleSubmit(submit)}>
        <Box component="div" sx={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
        <Typography color="red" sx={{fontFamily:"sans-serif",fontSize:"35px"}}>R</Typography><Typography sx={{fontFamily:"sans-serif",fontSize:"25px"}}>egister</Typography>
        </Box>
        <Box component="div" sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center", paddingTop:"10px"}}>
        <TextField id="outlined-basic" name='name' label="Name" variant="outlined" size='small' sx={{width:"50%",backgroundColor:"#e6e6e6",borderRadius:"5px"}} {...register('name')}/>
        <Typography color="red" sx={{fontFamily:"sans-serif"}}>{errors.name?.message}</Typography>
       </Box>
        <Box component="div" sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center", paddingTop:"10px"}}>
        <TextField id="outlined-basic" name='email' label="Email" variant="outlined" size='small' sx={{width:"50%",backgroundColor:"#e6e6e6",borderRadius:"5px"}} {...register('email')}/>
        <Typography color="red" sx={{fontFamily:"sans-serif"}}>{errors.email?.message}</Typography>
        </Box>
        <Box component="div" sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center", paddingTop:"10px"}}>
        <TextField id="outlined-basic" name='address' label="Addrress" variant="outlined" size='small' sx={{width:"50%",backgroundColor:"#e6e6e6",borderRadius:"5px"}} {...register('address')}/>
        <Typography color="red" sx={{fontFamily:"sans-serif"}}>{errors.address?.message}</Typography>

        </Box>
        <Box component="div" sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center", paddingTop:"10px"}}>
        <TextField id="outlined-basic" label="Phone Number" variant="outlined" size='small' sx={{width:"50%",backgroundColor:"#e6e6e6",borderRadius:"5px"}} {...register('phoneNumber')}/>
        </Box>
        <Box component="div" sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center", paddingTop:"10px"}}>
        <TextField id="outlined-basic" label="Password" variant="outlined" size='small' sx={{width:"50%",backgroundColor:"#e6e6e6",borderRadius:"5px"}} {...register('Password')}/>
        </Box>
        <Box component="div" sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center", paddingTop:"10px"}}>
        <TextField id="outlined-basic" label="Confirm Password" variant="outlined" size='small' sx={{width:"50%",backgroundColor:"#e6e6e6",borderRadius:"5px"}} {...register('confirmPassword')}/>
        </Box>
        <Box component="div" sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center", paddingTop:"10px"}}>
        <Button type="submit" variant="contained"  sx={{width:"50%",backgroundColor:"#6fb555",borderRadius:"5px" ,"&:hover":{backgroundColor:"green"}}}>Submit</Button>
        </Box>
        </form>
        
 
       
        
    </Box>
</Box>
  )
}

export default Register