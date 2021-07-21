import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import EventCreate from './EventCreate';

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
                    <EventCreate fetchEvents={fetchEvents} token={props.token}/>
                </Col>
                <Col md='9'>
                    <h2>Add an event to see a table. This will be added later.</h2>
                </Col>
            </Row>
        </Container>
    )
};

export default EventIndex;