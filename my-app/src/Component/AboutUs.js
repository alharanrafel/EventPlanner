import React from 'react';
import Card from 'react-bootstrap/Card';

const AboutUs = () => {
   return(
    <div>
     <Card>

        <HomBg>
        <Card.videoBg autoPlay loop variant="top" src='https://images.pexels.com/photos/8041220/pexels-photo-8041220.jpeg?auto=compress&cs=tinysrgb&w=600' type='video /mp4' />
        
        </HomBg>
          <Card.Body>
          <Card.Title>Our Story</Card.Title>
          <Card.Text>
        
             We have aligned our portfolio of companies under a new master
             brand and assumed the name Royalist. With a global 
             footprint reaching more than 20 countries, 
             we have experienced tremendous growth in recent years, extending 
             the solutions we provide customers to create in-person, 
             virtual and hybrid event experiences.
         
            </Card.Text>
            </Card.Body>
             <br />
        
        <Card>
        <Card.Img variant="top" src="https://media.istockphoto.com/photos/light-bulbs-with-event-management-concept-picture-id1350787994?k=20&m=1350787994&s=612x612&w=0&h=qjfhAoTccfZmCrc6nTUn1C7lA-cRIc2yVz6QgYSaOtI=" />
        <Card.Body>
       
           <p> Our global and local network of industry experts allow us
            of a partner that understands local
            of a global leader to deliver the same level of service
             excellence, time after time, — no matter where your event 
             takes you. Whether it be a hotel, convention center, restaurant, museum,
             or other event space, we have global reach to deliver a consistent 
             experience and measurable results.</p>
             
             </Card.Text>
             </Card.Body>
             <br />
             </Card>
      

       </div>
   )
}
export default AboutUs;