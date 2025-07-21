import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Navbar = ({userData, setUserData}) => {

  const navigate = useNavigate();

  const handleClick = () => {
    if (userData) {
      localStorage.removeItem("userData");
      setUserData(null);
      window.location.reload();
    }else{
    navigate('/register')
  }
  }
  console.log("userData in Navbar", userData);

  return <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant='h5' component="div" sx={{ flexGrow: 1 }}>Smart Financial Advisor</Typography>

          <Button component={NavLink} to='/dashboard' style={({ isActive }) => { return { backgroundColor: isActive ? '#1e64c7ff' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Dashboard</Button>

          <Button onClick={() => handleClick()}  sx={{ color: 'white', textTransform: 'none' }}>{userData != null ? "Logout" : "Register"}</Button>
          
      


        </Toolbar>
      </AppBar>
    </Box>
  </>;
};

export default Navbar;