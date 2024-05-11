import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SecurityIcon from '@mui/icons-material/Security';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {logOutUser} from '../features/auth/authSlice'

const Navbar = () => {

    const {user} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logOutUser())
    }

  return (
    <AppBar>
        <Toolbar>
            <SecurityIcon sx={{margin : '0px 10px'}} color='error'/>
            <Typography variant='h5' color='error' sx={{flexGrow:1}}>AUTH APP</Typography>
           
           {
            user ? (
                <>
                <Button variant='outlined' color='error' endIcon={<LogoutIcon/>} onClick={handleLogout}>Logout</Button>
                </>
            ) :
            (
                <>
                <Link to={'/login'}>
                <Button variant='outlined' sx={{margin : '0px 10px'}} color='warning' endIcon={<LoginIcon/>}>Login</Button>
                </Link>
                
                <Link to={'/register'}>
                <Button variant='outlined' color='success' endIcon={<PersonAddIcon/>}>Signup</Button>
                </Link>

                </>
            )
           }        
        </Toolbar>
    </AppBar>
  )
}

export default Navbar