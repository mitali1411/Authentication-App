import { Button, Card, CircularProgress, Container, Divider, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { registerUser } from '../features/auth/authSlice';

const Register = () => {

    const [formData, setFormData] = useState({
        name : '',
        email : '',
        password : '',
        password2 : '',
      });
    
      // Transferring this form data to Slice using dispatch
      const dispatch = useDispatch();
    
      // Destructuring form data for Input
      const {name, email, password, password2} = formData;
    
      // Handle Input : Change
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name] : e.target.value,
        })
      };
    
    
      // Handle Form : Submit
      const handleSubmit = (e) => {
        e.preventDefault();
        //
        if(password !== password2){
          toast.error('Password not match!!')
          // console.log('password not match')
        }
    
        dispatch(registerUser(formData));
        // console.log(formData)
      }
    
    
        const navigate = useNavigate();
    
        const {isLoading, isError, isSuccess, message, user} = useSelector((state) => state.auth);
    
        useEffect(() => {
    
            if(user || isSuccess){
                navigate('/')
            }
    
            if(isError || message){
                toast.error(message)
            }
        }, [isError, message]);
        
        if(isLoading) {
            return (
              <Container align='center' sx={{padding : '80px 0px'}}>
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
    <Card sx={{marginTop:'80px', padding:'50px', height:'auto', width:'350px'}}>
    <Typography variant='h4' align='center'>Registration</Typography>
        <form onSubmit={handleSubmit}>
            <TextField label='Enter Name' type='text' required fullWidth sx={{marginTop:'20px'}} name='name' value={name} onChange={handleChange}/>
            <TextField label='Enter Email Address' type='email' required fullWidth sx={{marginTop:'20px'}} name='email' value={email} onChange={handleChange}/>
            <TextField label='Enter Password' type='password' required fullWidth sx={{marginTop:'20px'}} name='password' value={password} onChange={handleChange}/>
            <TextField label='Confirm Password' type='password' required fullWidth sx={{marginTop:'20px'}} name='password2' value={password2} onChange={handleChange}/>
            <Button variant='contained' type='submit' sx={{marginTop:'20px'}} fullWidth>Register</Button>
            <Divider sx={{marginTop:'30px'}}/>
            <Typography variant='body2' align='center' sx={{marginTop:'20px'}}>Already have an account? <Link to={'/login'} sx={{}}>Login here</Link></Typography>
        </form>
    </Card>
    </Container>
  )
}

export default Register