import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import EventFeedTable from './EventFeedTable';
import EventEdit from './EventEdit';
import NasaAPI from '../components/APIs/NasaAPI';
import './EventFeed.css';
import APIURL from '../helpers/environment';

const EventFeed = (props) => {
    const [events, setEvents] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [eventToUpdate, setEventToUpdate] = useState({});

    const fetchEvents = () => {
        fetch(`${APIURL}/log/all`, {
        // fetch('http://localhost:3000/log/all', {  
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
        <Container className='event-feed'>
            <NasaAPI/>
            <Row>
                <Col md='12'>
                    <EventFeedTable events={events} editUpdateEvent={editUpdateEvent} 
                    updateOn={updateOn} fetchEvents={fetchEvents} token={props.token}/>
                </Col>
                {updateActive ? <EventEdit eventToUpdate={eventToUpdate}
                updateOff={updateOff} token={props.token} fetchEvents={fetchEvents}/> : <></>}
            </Row>
        </Container>
    )
};

export default EventFeed;