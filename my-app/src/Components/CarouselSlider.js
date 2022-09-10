 import Carousel from 'react-bootstrap/Carousel';
import React from 'react'
//import Box from '@mui/material/Box';
//import Switch from '@mui/material/Switch';
//import Paper from '@mui/material/Paper';
//import Slide from '@mui/material/Slide';
//import FormControlLabel from '@mui/material/FormControlLabel';


const CarouselSlider=() => {

  return (
    
   <div>
   <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_960_720.jpg"
          alt="All your Events" />
        <Carousel.Caption>
          <p>Public or private, indoor or outdoor, our passionate event experts are ready to transform your special event to create memorable moments for you and your participants. From festivals and concerts to weddings, award shows, galas and live sporting events, we’ll help you create focal points, moments of build-up, positivity, fun, and impact.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
          alt="Professional teams" />
        <Carousel.Caption>
          <p>Royalist works with the full gamut of client types in the trade show and exhibits industry </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1340253645/photo/shot-of-an-elegantly-decorated-table-at-a-wedding-reception.webp?s=612x612&w=is&k=20&c=ltI4abZRubQgpKhFKZcTz9c0Sw0nDSATJRAlaNdOjh0="
          alt="Distinctive designs" />
        <Carousel.Caption>
          <p>
            From keynotes to exhibit floors and breakout sessions
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1561489396-888724a1543d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGV2ZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
          alt="New Technology" />
        <Carousel.Caption>
          <p>Technology is changing the way businesses plan and conduct meetings and conventions </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/photos/business-network-concept-group-of-businessperson-teamwork-human-picture-id1299873170?k=20&m=1299873170&s=612x612&w=0&h=t014btS1_G42zjU6rayhthCQB93wfEybSjodh4yFUBU="
          alt="Fifth slide" />
        <Carousel.Caption>
          <p>Royalist provides global support for any convention and trade show services</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"

          src="https://media.istockphoto.com/photos/live-internet-streaming-of-business-conference-meetingonline-webinar-picture-id1318224799?k=20&m=1318224799&s=612x612&w=0&h=YLe5ciXv9nzpk2M0oNdlDawVLPr9XMF0Y3LbNIHEmDk="
          alt="Outstanding experiences" />
        <Carousel.Caption>
          <p>Host engaging and inspiring virtual events that will leave your virtual audience wanting more.

        </p>
        </Carousel.Caption>
      </Carousel.Item>
    
     </Carousel>
     </div>
  );
}

export default CarouselSlider;





/*import * as React from 'react';
 import Box from '@mui/material/Box';
 import Switch from '@mui/material/Switch';
 import Paper from '@mui/material/Paper';
 import Slide from '@mui/material/Slide';
 import FormControlLabel from '@mui/material/FormControlLabel';


 export default function Carousel({quote}) {
   const [checked, setChecked] = React.useState(false);

   const handleChange = () => {
     setChecked((prev) => !prev);
   };

   return (
     <Box sx={{ height: 180 }}>
       <Box sx={{ width: `calc(100px + 16px)` }}>
         <FormControlLabel
           control={<Switch checked={checked} onChange={handleChange} />}
           label="Date"
         />
         <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
           <Paper elevation={3}>
           <h6>{quote.dateModified}</h6>
           </Paper>
         </Slide>

       </Box>
     </Box>
   );
 }
export default Carousel;  */




