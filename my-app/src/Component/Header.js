
import React from 'react'


 const Header = () => {


    const headerStyle = {

        width: '100%',
        padding: '2%',
        backgroundColor: "gray",
        color: '#72f4f0d3',
        textAlign: 'center'
    }

    return(
        <div style={headerStyle}>
            <h1>Event Planner</h1>
        </div>
    )
};

export default Header;