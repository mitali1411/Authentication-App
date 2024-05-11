import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Register from './pages/Register'
import { createTheme } from '@mui/material'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ThemeProvider } from '@emotion/react'


const App = () => {

  const theme = createTheme({
    typography: {
      fontFamily: 'Trebuchet MS',
    },
  
    palette:{
      primary:{
        main: '#000000'
      },
      secondary:{
        main: '#FFFFFF'
      },
      warning:{
        main: '#FFF455'
      },
      error:{
        main: '#D72323'
      },
      success:{
        main: '#E8AA42'
      }
    }
  })

  return (
    <ThemeProvider theme={theme} >
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
        <ToastContainer/>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App