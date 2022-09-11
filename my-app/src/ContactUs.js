
import React from'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function ContactUs(){
    return(
        <div className='contact'>
        <marquee class = "marqueeiq" behavior="scroll" direction="left">
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://appassets.mvtdev.com/map/41/s/81/192046064.jpg" />
      <Card.Body>
        <Card.Title>You can find us from anywhere </Card.Title>
        <Card.Text>
          

       
        <h3> Phone Number: +12345667 </h3>
        <h3>Fax Number (866) 378-2373</h3>
        <h3> Email:Royalist@gmail.com </h3>
        <h3>Address:234 N Foxvalley St. IL </h3>
        <a href="#" class="fa fa-facebook"></a>
        <a href="#" class="fa fa-twitter"></a>
        <a href="#" class="fa fa-instagram"></a>
        
        
        </Card.Text>
        </Card>

        </div>
    );
}



export default ContactUs;


