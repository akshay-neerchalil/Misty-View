import { Card, CardMedia } from '@mui/material'
import React from 'react'

const Gallerycard = ({data}) => {
  return (
    <Card sx={{width:"30%",display:"flex",padding:"15px",alignItems:"center"}}>
        <CardMedia >
        <img style={{width:"90%",height:"100%",cursor:"pointer"}} src={data.image}></img>
        </CardMedia>
      </Card>
  )
}

export default Gallerycard