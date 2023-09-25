import React,{useState} from 'react';
import {Link} from "react-router-dom";
import './join.css'

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
  return (
    <>
      <div>
          <div className="container-fluid joinInnerContainer">
            <div className="row">
                <div className='shadow mx-auto col-6'>
                    <form action="" className=''>
                        <h1 className="text-center text-success">Join</h1>
                        
                        <div>
                          <input placeholder="Name" 
                              className="joinInput form-control" 
                              type="text" 
                              onChange={(event) => setName(event.target.value)} />
                        </div>
                        <div>
                          <input placeholder="Room" 
                            className="joinInput mt-20 form-control" 
                            type="text" 
                            onChange={(event) => setRoom(event.target.value)} />
                        </div>

                            <div className='mb-3'>
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

export default Join