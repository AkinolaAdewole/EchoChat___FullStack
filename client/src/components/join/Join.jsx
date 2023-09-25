import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './join.css'

// Define the functional component called Join
const Join = () => {
    // Initialize state variables using the useState hook
    const [name, setName] = useState(''); // State for user's name
    const [room, setRoom] = useState(''); // State for the chat room name

    // Render the JSX content for the Join component
    return (
        <>
            <div>
                <div className="container-fluid joinInnerContainer">
                    <div className="row">
                        <div className='shadow mx-auto col-6'>
                            <form action="" className=''>
                                <h1 className="text-center text-success">Join</h1>

                                {/* Input field for user's name */}
                                <div>
                                    <input placeholder="Name"
                                        className="joinInput form-control"
                                        type="text"
                                        onChange={(event) => setName(event.target.value)} />
                                </div>

                                {/* Input field for chat room name */}
                                <div>
                                    <input placeholder="Room"
                                        className="joinInput mt-20 form-control"
                                        type="text"
                                        onChange={(event) => setRoom(event.target.value)} />
                                </div>

                                {/* Button to join the chat room */}
                                <div className='mb-3'>
                                    {/* Use the Link component to navigate to the chat room */}
                                    <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                                        <button className='bg-success button mt-20' type="submit">Sign In</button>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Join; // Export the Join component for use in other parts of the application
