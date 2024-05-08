import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const Accomodationcard = ({data}) => {
  return (
    <Card sx={{width:"40%",display:"flex",padding:"15px"}}>
        <CardMedia >
        <img style={{width:"80%",height:"100%"}} src={data.image}></img>
        </CardMedia>
      <CardContent>
           {/* <Typography>image: {data.image}</Typography> */}
           
           
           <Typography sx={{fontFamily:"sans-serif",fontSize:"20px"}}>{data.name}</Typography>
           <Typography>{data.persons} Persons</Typography>
           <Typography>{data.rate}/-</Typography>
      </CardContent>
      
    </Card>
  )
}

export default Accomodationcard