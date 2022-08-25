// npm install @mui/material @emotion/react @emotion/styled
// import Paper from '@mui/material/Paper';
//npm install react-bootstrap bootstrap



/*import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
// gives us data
const ApiEndpoint = "https://api.quotable.io/random"

function App() {
  // 3step
  // 1 create usestate
  // 2 create fetch api and wrap it in a function
  const [quote,setQuotes]= useState('')

  const getQuote = () => {
    fetch("https://api.quotable.io/random")
    .then((response) =>(response.json()))
    .then((data) => setQuotes(data)); // add the data to our state local*/

import React from 'react'
import {Link} from 'react-router-dom'
//import Navbar from 'react-bootstrap/Navbar'


const Navbar =()=>{
  return(
    <div>
      
      <Link to ='/aboutus'> AboutUs </Link>
      <Link to ='/home'> Home </Link>
      <Link to ='/typeOfEvents'> TypeOfEvents </Link>
      <Link to ='/contactus' > ContactUs </Link>
      


        
     </div>
      );
     }
     export default Navbar;