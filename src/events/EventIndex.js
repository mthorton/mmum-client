import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import EventCreate from './EventCreate';
import EventTable from './EventTable';
import EventEdit from './EventEdit';

const EventIndex = (props) => {
    const [events, setEvents] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [eventToUpdate, setEventToUpdate] = useState({});

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

    const editUpdateEvent = (event) => {
        setEventToUpdate(event);
        console.log(event);
    }

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }

    useEffect(() => {
        fetchEvents();
    }, []);

    return(
        <Container>
            <Row>
                <Col md='3'>
                    <EventCreate fetchEvents={fetchEvents} token={props.token}/>
                </Col>
                <Col md='9'>
                    <EventTable events={events} editUpdateEvent={editUpdateEvent} 
                    updateOn={updateOn} fetchEvents={fetchEvents} token={props.token}/>
                </Col>
                {updateActive ? <EventEdit eventToUpdate={eventToUpdate}
                updateOff={updateOff} token={props.token} fetchEvents={fetchEvents}/> : <></>}
            </Row>
        </Container>
    )
};

export default EventIndex;