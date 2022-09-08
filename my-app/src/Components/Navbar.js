

import React from 'react';
import {FaBars} from 'react-icons/fa';
import Nav   from './NavBarElem';
import NavbarContainer from './NavBarElem';
import NavLogo from '/NavBarElem';
import MobileIcon from  './NavBarElem';
import NavMenu from  './NavBarElem';
import NavItem from  './NavBarElem';
import NavLinks from  './NavBarElem';
import NavBtnLink  from './NavBarElem';
import NavBtn from './NavBarElem';



const Navbar =({toggle})=>{
    
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
                      
                       

               
            //to sign in use
            <NavBtn>
                <NavBtnLink to='/sign'>Sign In </NavBtnLink>
            </NavBtn>
        </NavbarContainer>
       </Nav>
            
        
    );
};
export default Navbar;