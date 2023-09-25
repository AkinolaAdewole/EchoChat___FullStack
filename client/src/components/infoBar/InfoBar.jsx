import React from 'react'

// Importing images for online and close icons
import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

// Importing CSS styles for the InfoBar component
import './InfoBar.css';

// Define the functional component called InfoBar
const InfoBar = ({ room }) => {
  return (
    <div>
        {/* The div containing the InfoBar */}
        <div className="infoBar">
            {/* Left section of the InfoBar */}
            <div className="leftInnerContainer">
                {/* Online icon */}
                <img className="onlineIcon" src={onlineIcon} alt="online icon" />
                {/* Display the room name */}
                <h3>{room}</h3>
            </div>
            {/* Right section of the InfoBar */}
            <div className="rightInnerContainer">
                {/* Link to navigate to the home page */}
                <a href="/"><img src={closeIcon} alt="close icon" /></a>
            </div>
        </div>
    </div>
  )
}

export default InfoBar; // Export the InfoBar component for use in other parts of the application
