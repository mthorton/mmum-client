import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import EventCreate from '../../events/EventCreate';
import EventTable from '../../events/EventTable';
import EventEdit from '../../events/EventEdit';
//import APIURL from '../../helpers/environment';

const EventIndex = (props) => {
    const [events, setEvents] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [eventToUpdate, setEventToUpdate] = useState({});

    const fetchEvents = () => {
        //fetch(`${APIURL}/log`, {
        //${event.id}
        fetch(`http://localhost:3000/log/all/`, {  
        method: "GET",
        headers: new Headers({
            'Content-Type': 'application/json',
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
            <Col md="9">
                    <EventTable events={events} editUpdateEvent={editUpdateEvent} updateOn={updateOn} fetchEvents={fetchEvents} token={props.token} />
                </Col>
                <Col md="3">
                    <EventCreate fetchEvents={fetchEvents} token={props.token}/>
                </Col>
                {updateActive ? <EventEdit eventToUpdate={eventToUpdate} updateOff={updateOff} token={props.token} fetchEvents={fetchEvents}/> : <></>}
            </Row>
        </Container>
    )
};

export default EventIndex;