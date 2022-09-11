
import React from 'react'

export const DisplayBoard = ({numberOfEvents, getAllEvents}) => {

    const headerStyle = {

        width: '100%',
        padding: '2%',
        backgroundColor: "#282c34",
        color: 'white',
        textAlign: 'center'
    }
    
    return(
        <div style={{backgroundColor:'#72f4f0d3'}} className="display-board">
            <h2 style={{color: 'black'}} >Events Created</h2>
            <div className="number">
            {numberOfEvents}
            </div>
            <div className="btn">
                <button type="button" onClick={(e) => getAllEvents()} className="btn btn-warning">Get all Events</button>
           
            </div>
            </div> 
        
        
    )
}
export default DisplayBoard;