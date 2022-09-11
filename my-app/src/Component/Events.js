
import React from 'react'
import Figure from 'react-bootstrap/Figure';

export const Events = ({events}) => {

    console.log('events length:::', events.length)
    if (events.length === 0) return null

    const EventRow = (event,index) => {

        return(
            <div>
            <Figure>
      <Figure.Image
        width=%100
        height={180}
        alt="171x180"
        src='https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2VkZGluZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=1600&q=60'
        alt='Weddings'
      />
      <Figure.Caption>
       <p>Planning services for a personalized event for 10-50 guests.
        </p>
      </Figure.Caption>

      <Figure.Image
        width=%100
        height={180}
       // alt="%100x180"
        src="https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGp8ZW58MHx8MHx8&auto=format&fit=crop&w=1600&q=60"
        alt='DJ'
      />
      <Figure.Caption>
       <p>
          We are ready for all occasions and holidays.
        </p>
      </Figure.Caption>


      <Figure.Image
        width= 100
        height={180}
       // alt="%100x180"
        src="https://images.unsplash.com/photo-1582192730841-2a682d7375f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29uZmVyZW5jZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1600&q=60"
        alt='Conferences'
      />
      <Figure.Caption>
      <p>Simple, modern meeting facility with guest suites & summer group-housing accommodations. </p>
      </Figure.Caption>

    </Figure>
  );
}
             
             
 
              <tr key = {index} className={index%2 === 0?'odd':'even'}>
                  <td>{index + 1}</td>
                  <td>{event.firstName}</td>
                  <td>{event.lastName}</td>
                  <td>{event.eventDescription}</td>
                  <td>{event.partyCount}</td>
                  <td>{event.email}</td>
              </tr>
          )
    }

    const eventTable = events.map((event,index) => EventRow(event,index))

    return(
        <div className="container">
            <h2>Events</h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Event Id</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>EventDescription</th>
                    <th>PartyCount</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                    {eventTable}
                </tbody>
            </table>
        </div>
        </div>
    );
}
export default Events;