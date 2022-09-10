
import React from 'react';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import TypeOfEvents from './Components/TypeOfEvents';
import ContactUs from './Components/ContactUs';
import InitialLogo from './Components/InitialLogo';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Link} from 'react-router-dom'
import {Route, Routes} from 'react-router-dom';
import CarouselSlider from './Components/CarouselSlider';
import {useState} from 'react';




function App() {
 
  const randomUserObj= 
    {imgVar : 'https://media.istockphoto.com/photos/royal-crown-logo-picture-id802318150?k=20&m=802318150&s=612x612&w=0&h=BRWgpOWgAwoS7e-9dQ3-anU2UwF4Uwg-DG32y2l94Gs=' },
  {/* { nameLogo : 'Royalist', color: '#b4b4b4' }
      
      console.log("r",randomUserObj.imgVar); */}
   
    
    const [index,setIndex]=useState('')
    const getIndex =()=>{
      fetch(' ')
      .then((response) =>(response.json()))
      .then((data => setIndex(data)));
    };

    useEffect(()=>{
      getIndex();
    },[]);
    console.log('index')

    return(
    <div className='App'>

    
    <h1> Royalist </h1>
    
    
    <Navbar />
    <InitialLogo />
    < CarouselSlider />
    <Routes>

        <Route exact path='/home' element={<Home imgVar ={randomUserObj}/> } />
        <Route  path='/aboutus' element={<AboutUs />} />
        <Route  path='/typeOfEvents' element={<TypeOfEvents />} />
        <Route  path='/contactus' element={<ContactUs />} />
      </Routes>
     


    </div>
  );
};
export default App;














 /* import React from 'react'
 import Home from './Component/Home'
import AboutUs from './Component/AboutUs'
import ContactUs from './Component/ContactUs'
import TypeOfEvents from './Component/TypeOfEvents'
import Navbar from './Component/Navbar'
import InitialLogo from './Component/InitialLogo'
import Button from 'react-bootstrap/Button';
import './App.css'
import {Routes, Route} from 'react-router-dom'


const App = () => {
 const randomUserObj= [
        {imgVar : 'https://media.istockphoto.com/photos/royal-crown-logo-picture-id802318150?k=20&m=802318150&s=612x612&w=0&h=BRWgpOWgAwoS7e-9dQ3-anU2UwF4Uwg-DG32y2l94Gs=' },
        { nameLogo : 'Royalist', color: '#b4b4b4' }
              ]
    

  return(
    <div className ='App'>
   {/*  <InitialLogo userObj = {randomUserObj} /> */


   /*<Navbar bg="light" expand="lg">
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

export default App;  */





/*import React from 'react'
import {useState,useEffect} from 'react'
import Home from './Component/Home'
import AboutUs from './Component/AboutUs'
import ContactUs from './Component/ContactUs'
import TypeOfEvents from './Component/TypeOfEvents'
import Navbar from './Component/Navbar'
import InitialLogo from './Component/InitialLogo'
//import Button from 'react-bootstrap/Button';

import {Routes, Route} from 'react-router-dom'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Carousel from './Components/Carousel';
import './App.css'
import Button from '@mui/material/Button';
 import Card from '@mui/material/Card';
 import Paper from '@mui/material/Paper';
 import Typography from '@mui/material/Typography';






const App =()=>{
  var imgVar= 'https://media.istockphoto.com/photos/royal-crown-logo-picture-id802318150?k=20&m=802318150&s=612x612&w=0&h=BRWgpOWgAwoS7e-9dQ3-anU2UwF4Uwg-DG32y2l94Gs=' 
     
      const [event,setEvent]=useState('')

     const getEvent=()=>{
      fetch('https://api.quotable.io/random')
      .then((response) =>(response.json()))
     .then((data) => setQuotes(data));
     };


      
    
  return(
    <div>
      <div>
    <Navbar />
    < Carousel />
    <Routes>
        <Route exact path='/initiallogo' element={< InitialLogo />} />
        <Route exact path='/home' element={<Home link={imgVar} /> } />
        <Route exact path='/aboutus' element={<AboutUs />} />
        <Route exact path='/typeOfEvents' element={<TypeOfEvents />} />
        <Route exact path='/contactus' element={<ContactUs />} />
      </Routes>
      </div>

    </div>
  )
}
export default App;*/




/*import {useState,useEffect} from 'react'
 import './App.css';
 import Navbar from './Navbar';
 import NavbarComponent from './NavbarComponent';
 import AboutUs from './Component/AboutUs';
 import CarouselRb from './Component/Carousel';
 import ConactUs from ',/Component/contactus';
 import Event from './Component/Events';
 import 
 import {Routes,Route} from 'react-router-dom'
 import Home from './Component/Home';
 import Alert from 'react-bootstrap/Alert';
 import 'bootstrap/dist/css/bootstrap.min.css';*/



 /*import logo from './logo.svg';
 import './App.css';
 import { useState,useEffect } from 'react';
 import Button from '@mui/material/Button';
 import Card from '@mui/material/Card';
 import Paper from '@mui/material/Paper';
 import Typography from '@mui/material/Typography';
 //import Carousel from './components/Carousel'
 import Home from './components/home';

 import Navbar from './Component/Navbar';
 
 const ApiEndpoint = "https://api.quotable.io/random"

 function App() {
   
   const [quote,setQuotes]= useState('')

   const getQuote = () => {
     fetch("https://api.quotable.io/random")
     .then((response) =>(response.json()))
     .then((data) => setQuotes(data)); 
   };

 
   useEffect(() => {
     getQuote();
     console.log("useeffect")
   }, []);

   const getNewQuote = () => {
     getQuote();
   };
   // getNewQuote()

   return (
     <div className="App" id="appContainer">

       <Paper elevation={3} style={{background:"lightBlue"}}>
       <Typography variant="h4">
         <marquee scrolldelay="65">
         {quote.content}
         </marquee>
         </Typography>
       </Paper>

       <Paper elevation={3}>
       <Typography variant="h6">{quote.author}</Typography>
       </Paper>

       <Paper elevation={3}>
       <Typography variant="h6">{quote.tags}{quote.length}{quote.authorSlug}</Typography>
       </Paper>
       <Pop quote= {quote}/>
        <Slider quote= {quote}/>

     <center>
       <Button variant="contained" color="secondary" size="large" onClick={getNewQuote}>Change quote</Button>
       </center>
          </div>
   );
 }

 export default App;*/
 

 /*import React from 'react';
 
 import AboutUs from './Component/AboutUs';
 import ContactUs from './Component/ContactUs';
 import Events from './Component/Events';
 import Home from './Component/Home';
 import Navbar from './Component/Navbar';
 import TypeOfEvents from './Component/TypeOfEvents'
 import InitialLogo from './Component/InitialLogo'
 import Carousel from './Component/Carousel';
import Button from 'react-bootstrap/Button';
import {Routers, Route} from 'react-router-dom'


const App=()=>{
  const randomUserObj= [
    {imgVar : 'https://media.istockphoto.com/photos/royal-crown-logo-picture-id802318150?k=20&m=802318150&s=612x612&w=0&h=BRWgpOWgAwoS7e-9dQ3-anU2UwF4Uwg-DG32y2l94Gs=' },
    { nameLogo : 'Royalist', color: '#b4b4b4' }
          ]
  return (
    <div className="App">
      <div>
      <h1> Royalist </h1>

      <InitialLogo userObj = {randomUserObj} />

      
     <Navbar />
         <Routes>
        <Route exact path ='/initiallogo' element ={<InitialLogo name={nameLogo} />} />
        <Route exact path ='/home' element ={<Home img = {imgVar} />} />
        <Route exact path='/aboutus' element={ <AboutUs />} />
        <Route exact path ='/typeOfEvents' element ={<TypeOfEvents />} />
        <Route exact path='/contactus' element ={<ContactUs />} />
          </Routes>
          
         </div>


    </div>
  )
}
export default App; */




