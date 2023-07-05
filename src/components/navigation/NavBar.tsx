'use client'
import Link from 'next/link';
import {Button, AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navItems = ['Home', 'About', 'Contact'];

const NavBar: React.FC = () => {
  return (
    <AppBar component="nav">
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        sx={{ mr: 2, display: { sm: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
      >
        UniSync
      </Typography>
      <Button variant="contained">Sign In</Button>
      <Button variant="contained">Sign Up</Button>
    </Toolbar>
  </AppBar>
  );
};

export default NavBar;
