
/*
import React from 'react';
//import {FaBars} from 'react-icons/fa';
//import Nav   from './NavBarElem';
//import NavbarContainer from './NavBarElem';
//import NavLogo from '/NavBarElem';
//import MobileIcon from  './NavBarElem';
//import NavMenu from  './NavBarElem';
//import NavItem from  './NavBarElem';
//import NavLinks from  './NavBarElem';
//import NavBtnLink  from './NavBarElem';
//import NavBtn from './NavBarElem';
import {Link} from 'react-router-dom';




const Navbar = () => {
    return (
      


/* const Navbar =({toggle})=>{
    
    return(
        
            <Nav>
               
            <NavbarContainer isOpen={isOpen}  onClick={toggle}>
                   
            <NavLogo to='/'>Royalist</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
           //to add pages:
                        <NavItem>
                            <NavLinks to='home'>Home  </NavLinks>
                        </NavItem>
                       < NavItem>
                        <NavLinks to='aboutus'> About Us  </NavLinks>
                    </NavItem>
                    < NavItem>
                <NavLinks to='contact'> Contact  </NavLinks>
               </NavItem>
             </NavMenu>


                      <NavItem>
                    <NavLinks to='typeofevents'> Type Of Events  </NavLinks>
                       </NavItem> 
                      
                      </Nav>
    );
};
 

      export default Navbar;   */ 




import React from 'react'
import {Link} from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
const pages = ['Home', 'AboutUs','TypeOfEvents', 'ContactUs'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const Navbar = () => {
    
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    

    
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                
                src= "/about"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Link to= '/home' style={{textDecoration: 'none'}}>Home</Link>
         <Link to= '/aboutus'style={{textDecoration: 'none'}}>About Us</Link>
       <Link to= '/contactus'style={{textDecoration: 'none'}}>Contact Us</Link>
       <Link to= '/typeofevents' style={{textDecoration: 'none'}}>Type Of Events</Link>
       
     
    
          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/"https://images.unsplash.com/photo-1530023367847-a683933f4172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZXZlbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1100&q=60" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="events-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;














{/* const Navbar = () => {
  return (
    <div id ='navbar'>
    <Link to='/home'  style={{textDecoration:'none'}}> Home</Link>
    <Link to='/aboutus' style={{textDecoration:'none'}} > About Us</Link>
    <Link to='/typeofevevents' style={{textDecoration:'none'}} > Type Of Events</Link>
    <Link to='/contactus' style={{textDecoration:'none'}} > Contact Us</Link>
    </div>
  );
};
export default Navbar; 
*/}


   