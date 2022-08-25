
 import React from 'react'
 import Home from './Component/Home'
import AboutUs from './Component/AboutUs'
import ContactUs from './Component/ContactUs'
import TypeOfEvents from './Component/TypeOfEvents'
import Navbar from './Component/Navbar'
import InitialLogo from './Component/InitialLogo'
import './App.css'
import {Routes, Route} from 'react-router-dom'


const App = () => {
 const randomUserObj= [
          {imgVar : 'https://media.istockphoto.com/photos/royal-crown-logo-picture-id802318150?k=20&m=802318150&s=612x612&w=0&h=BRWgpOWgAwoS7e-9dQ3-anU2UwF4Uwg-DG32y2l94Gs=' },
          { nameLogo : 'Royalist', color: '#b4b4b4' }
              ]
    

  return(
    <div className ='App'>
   {/*  <InitialLogo userObj = {randomUserObj} /> */}


   <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Royalist</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>

            <Nav.Link href="#link">About</Nav.Link>
            
            <NavDropdown title="TypeOfEvents" id="basic-nav-dropdown">
              <NavDropdown.Item
               href="#events/3.1">Events</NavDropdown.Item>
              <NavDropdown.Item href="#events/3.2">
                //Another action
              </NavDropdown.Item>

              <NavDropdown title="Contact Us" id="basic-nav-dropdown">
              <NavDropdown.Item href="#keepintouch/3.1">Keep In Touch</NavDropdown.Item>
              <NavDropdown.Item href="#Keepintouch/3.2">
                //Another action
              </NavDropdown.Item>
              
            </NavDropdown>
            </Nav>
        
        </Navbar.Collapse>
      </Container>
     </Navbar>
      

      <Navbar />
      <h1>  the app is running</h1>

          <Routes>
        <Route exact path ='/initiallogo' element ={<InitialLogo name={nameLogo} />} />
        <Route exact path ='/home' element ={<Home img = {imgVar} />} />
        <Route exact path='/aboutus' element={ <AboutUs />} />
        <Route exact path ='/typeOfEvents' element ={<TypeOfEvents />} />
        <Route exact path='/contactus' element ={<ContactUs />} />
          </Routes>
          
    </div>
  );
}

export default App; 


