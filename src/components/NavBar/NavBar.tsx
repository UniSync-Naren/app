'use client'
import {Button, AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar: React.FC = () => {


const handleSignInClick = () => {
}

const handleSignUpClick = () => {
 }
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
      <Button variant="contained" onClick={handleSignInClick}>Sign In</Button>
      <Button variant="contained" onClick={handleSignUpClick}>Sign Up</Button>
    </Toolbar>
  </AppBar>
  );
};

export default NavBar;
