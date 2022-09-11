
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import { getAllEvents, createEvent } from './Services/EventService'
import  Header from './Component/Header';
import  Events from './Component/Events';
import  DisplayBoard from './Component/DisplayBoard';
import CreateEvent from './Component/CreateEvent';
import AboutUs from './Component/AboutUs';
import Home from './Component/Home';
import NavBar from './Component/NavBar';
import ContactUs from './Component/ContactUs';
import CarouselDo from './Component/CarouselDo';




  function App() {

  const [event, setEvent] = useState({})
  const [events, setEvents] = useState([])
  const [numberOfEvents, setNumberOfEvents] = useState(0)


  const eventCreate = (e) => {

      createEvent(event)
        .then(response => {
          console.log(response);
          setNumberOfEvents(numberOfEvents+1)
      });
  }

  const fetchAllEvents = () => {
    getAllEvents()
      .then(events => {
        console.log(events)
        setEvents(events);
        setNumberOfEvents(events.length)
      });
  }

  useEffect(() => {
    getAllEvents()
      .then(events => {
        console.log(events)
        setEvents(events);
        setNumberOfEvents(events.length)
      });
  }, [])
     
  const onChangeForm = (e) => {
      if (e.target.name === 'firstname') {
          event.firstName = e.target.value;
      } else if (e.target.name === 'lastname') {
          event.lastName = e.target.value;
      } else if (e.target.name === 'eventDescription') {
          event.eventDescription = e.target.value;
      } else if (e.target.name === 'partyCount') {
          event.partyCount = e.target.value;
      } else if (e.target.name === 'email') {
          event.email = e.target.value;
      }
      setEvent(event)
  }
  
    return (

        <div className="App">
          <Header></Header>
          <div className="container mrgnbtm">
            <div className="row">
              <div className="col-md-8">
                  <CreateEvent 
                    event={event}
                    onChangeForm={onChangeForm}
                    createEvent={eventCreate}
                    >

                  </CreateEvent>
              </div>
              <div className="col-md-4">
                  <DisplayBoard
                    numberOfEvents={numberOfEvents}
                    getAllEvents={fetchAllEvents}
                  >

                  <NavBar />
                  <CarouselDo />
                   
                  <Routes>

                    <Route exact path='/home' element={<Home /> } />
                    <Route  path='/events' element={<Events />} />
                    <Route  path='/aboutus' element={<AboutUs />} />
                    <Route  path='/contactus' element={<ContactUs />} />
                   
                    </Routes>
                  
                   </DisplayBoard>
              </div>
            </div>
          </div>
          <div className="row mrgnbtm">
            <Events events={events}></Events>
          </div>
        </div>
    );
}

export default App;