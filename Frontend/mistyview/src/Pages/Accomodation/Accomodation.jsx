import { Box} from '@mui/material'
import React from 'react'
import { accomodationDetails } from '../../Dummydata/Dummydata'
import Accomodationcard from '../../CommonComponents/Accomodationcard'

const Accomodation = () => {
  return (
   <Box component="div" sx={{display:"flex",justifyContent:'center',flexWrap:'wrap',gap:'20px',marginTop:'35px'}}>
    {accomodationDetails.map((data, index) => (
    <Accomodationcard key={index} data={data}/>
    ))}
    </Box>
   


  )
}
export default Accomodation
