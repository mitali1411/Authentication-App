import { Button, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';
import { logOutUser } from '../features/auth/authSlice';


const Home = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user, isLoading, isError} = useSelector((state)=> state.auth);

    const handleLogout = () => {
        dispatch(logOutUser())
      }

    useEffect(()=> {
        if(!user){
            navigate('/login')
        }
    }, [user]);

    if(isLoading){
        return(
            <Container sx={{padding: '80px 0px'}} align='center'>
                <CircularProgress/>
            </Container>
        )
    };

    if (isError) {
        return (
          <Container sx={{ padding: "80px 0px" }}>
            <Typography
              sx={{ margin: "20px 0px" }}
              variant="h5"
              align="center"
              color={"error"}
            >
              Something Went Wrong...
            </Typography>
          </Container>
        );
      };

  return (
    <div className='App' >
    {/* <Typography variant='h3' color='success' sx={{padding:'80px 0px'}}>Home Page</Typography> */}
        <Typography variant='h1' color='secondary' align='center'>Welcome</Typography>
        <Typography variant='h1' color='secondary' align='center'>Home Page</Typography>
        <Button variant='contained' color='error' endIcon={<LogoutIcon/>} sx={{marginTop:'60px'}} onClick={handleLogout}>Logout</Button>
    </div>
  )
}

export default Home