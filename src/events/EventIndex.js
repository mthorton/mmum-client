import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';

const EventIndex = (props) => {
    const [events, setEvents] = useState([]);

    const fetchEvents = () => {
        fetch('http://localhost:3000/log', {
        method: "GET",
        headers: new Headers({
            'Content-Type': "application/json",
            'Authorization': `Bearer ${props.token}`
        })
    }).then((res) => res.json())
    .then((logData) => {
        setEvents(logData);
    })
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    return(
        <Container>
            <Row>
                <Col md='3'>
                    {/* The CREATE component will go here. */}
                </Col>
                <Col md='9'>
                    <h2>Add an event to see a table. This will be added later.</h2>
                </Col>
            </Row>
        </Container>
    )
    };

// import { useState, useEffect } from "react";
// import { Container, Row, Col } from "reactstrap";

// const EventIndex = (props) => {
//     const [title, setTitle] = useState();
//     const [date, setDate] = useState();
//     const [location, setLocation] = useState();
//     const [description, setDescription] = useState();

//     return (
//         <div className='main'>
//             <div className="mainDiv">
//                 <h1>Create an Event</h1>
//                 <p>Use the form to create an event.</p>
//                 <form>
//                     <label>Event Name: <input value={title} onChange={e => setTitle(e.target.value)} /></label>
//                     <label>Date: <input value={date} onChange={e => setDate(e.target.value)} /></label>
//                     <label>Location: <input value={location} onChange={e => setLocation(e.target.value)} /></label>
//                     <label>Description: <input value={description} onChange={e => setDescription(e.target.value)} /></label>
//                     <input type="submit" value="Submit" />
//                 </form>
//                 <br />
//                 <button onClick={UpdateLog}>Update Event</button>
//                 <button onClick={DeleteLog}>Delete Event</button>
//             </div>
//         </div>
//     );
// };

export default EventIndex;