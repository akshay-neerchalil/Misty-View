import { useState } from 'react'
import './App.css'
import Home from './Components/Home/Home'
import Description from './Components/Description/Description'
import { Box } from '@mui/material'
import Aminities from './Components/Aminities/Aminities'
import Dashboard from './Pages/Dashboard/Dashboard'
import Footer from './Components/Footer/Footer'
import Login from './Pages/LoginPage/Login'
import Register from './Pages/Registration/Register'
import { RouterProvider } from 'react-router-dom'
import { routes } from './Routes/Routes'
import Header from './CommonComponents/Header'
import SecondHeader from './CommonComponents/SecondHeader'
import Accomodation from './Pages/Accomodation/Accomodation'
import Gallery from './Pages/Gallery/Gallery'




function App() {
  const [count, setCount] = useState(0)

  return (
    <RouterProvider router={routes} />
    // <Header/>
    // <SecondHeader/>
    // <Accomodation/>
    // <Gallery/>

    
  )
}

export default App
