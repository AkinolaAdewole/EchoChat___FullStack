import React from 'react';

// Import the 'react-scroll-to-bottom' library for scrolling messages
import ScrollToBottom from 'react-scroll-to-bottom';

// Import the 'Message' component
import Message from './Message/Message';

// Import CSS styles for the 'Messages' component
import './Messages.css';

// Define the functional component called 'Messages'
const Messages = ({ messages, name }) => (
  // Use 'ScrollToBottom' to create a scrolling container for messages
  <ScrollToBottom className="messages">
    {/* Map through the 'messages' array to display each message */}
    {messages.map((message, i) => (
      <div key={i}>
        {/* Render the 'Message' component for each message */}
        <Message message={message} name={name} />
      </div>
    ))}
  </ScrollToBottom>
);

export default Messages; // Export the 'Messages' component for use in other parts of the application
