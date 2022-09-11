import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselDo() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_960_720.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Unforgettable Memory</h5>
          <p>Your special event to create memorable moments for you and your participants.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnQlMjBwbGFubmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1296&q=60"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Great Choice</h5>
          <p>Royalist works with the full gamut of client types in the trade show and exhibits industry.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZXZlbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=1296&q=60"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Fun, and Impact</h5>
          <p>
            we’ll help you create focal points, moments of build-up, positivity.
          </p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1561489396-888724a1543d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGV2ZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h5> Using Best Technoloy</h5>
          <p>
             technology is changing the way businesses plan and conduct meetings and conventions. 
          </p>
        </Carousel.Caption>
      </Carousel.Item>


       <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/photos/live-internet-streaming-of-business-conference-meetingonline-webinar-picture-id1318224799?k=20&m=1318224799&s=612x612&w=0&h=YLe5ciXv9nzpk2M0oNdlDawVLPr9XMF0Y3LbNIHEmDk="
          alt="fifth slide"
        />
        <Carousel.Caption>
          <h5> Royalist has a professional team</h5>
          <p>Host engaging and inspiring virtual events that will leave your virtual audience wanting more. technology is changing the way businesses plan and conduct meetings and conventions. 
          </p>
        </Carousel.Caption>
      </Carousel.Item>


      
    </Carousel>
  );
}

export default CarouselDo;