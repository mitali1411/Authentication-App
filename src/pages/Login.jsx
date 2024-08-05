import { Button, Card, CircularProgress, Container, Divider, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import {loginUser} from '../features/auth/authSlice'

const Login = () => {

    const navigate = useNavigate()
    const {user, isLoading, isError, message, isSuccess} = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(()=>{

        if(user){
            navigate('/')
        }

        if(isError || message){
            toast.error(message);
        }

    }, [user, isError, message, isSuccess]);


    const [formData, setFormData] = useState({
        email : '',
        password : ''
    });
    const {email, password} = formData;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value,
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser(formData))
    }

    if(isLoading){
        return(
            <Container sx={{padding: '0px 0px'}} align='center'>
                <CircularProgress/>
            </Container>
        )
    };

    if(isError){
        return(
          <Container sx={{padding : '80px 0px'}}>
            <Typography align='center' variant='h3' color='error'>Something Went Wrong...</Typography>
          </Container>
        )
      };

  return (
    <Container sx={{display:'flex', alignItems:'center', justifyContent:'center'}}> 
    <Card sx={{marginTop:'100px', padding:'50px', height:'auto', width:'350px'}}>
    <Typography variant='h4' align='center'>Login Here</Typography>
        <form onSubmit={handleSubmit}>
            <TextField label='Enter Email Address' type='email' required fullWidth sx={{marginTop:'20px'}} value={email} name='email' onChange={handleChange}/>
            <TextField label='Enter Password' type='password' required fullWidth sx={{marginTop:'20px'}} value={password} name='password' onChange={handleChange}/>
            <Button variant='contained' type='submit' sx={{marginTop:'20px'}} fullWidth>Login</Button>
            <Divider sx={{marginTop:'30px'}}/>
            <Typography variant='body2' align='center' sx={{marginTop:'20px'}}>Don't have an account? <Link to={'/register'} sx={{}}>Sign up</Link></Typography>
       
        </form>
    </Card>
    </Container>
  )
}

export default Login