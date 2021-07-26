import React from 'react';
import { Table, Button } from 'reactstrap'; 
import APIURL from '../helpers/environment';

const EventFeedTable = (props) => {

    const deleteEvent = (event) => {
        //fetch(`${APIURL}/log/${event.id}`, {
        fetch(`http://localhost:3000/log/${event.id}`, {  
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchEvents())
    }

    const eventMapper = () => {
        return props.events.map((event, index) => {
            return(
                <tr key={index}>
                    <th scope="row">{event.id}</th>
                    <td>{event.date}</td>
                    <td>{event.title}</td>
                    <td>{event.location}</td>
                    <td>{event.description}</td>
                </tr>
            )
        })
    }

    return(
        <>
        <h3>Event Feed</h3>
        <hr/>
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Title</th>
                    <th>Location</th>
                    <th>Description</th>
                    
                </tr>
            </thead>
            <tbody>
                {eventMapper()}
            </tbody>
        </Table>
        </>
    )
}

export default EventFeedTable;