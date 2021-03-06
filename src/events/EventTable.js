import React from 'react';
import { Table, Button } from 'reactstrap'; 
import APIURL from '../helpers/environment';

const EventTable = (props) => {

    const deleteEvent = (event) => {
        fetch(`${APIURL}/log/delete/${event.id}`, {
        // fetch(`http://localhost:3000/log/delete/${event.id}`, {  
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                //'Authorization': props.token
                'Authorization' : `Bearer ${props.token}`
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
                    <td>
                        <Button className='create-button' color="white" onClick={() => {props.editUpdateEvent(event); props.updateOn()}}>Update</Button>
                        <Button className='create-button' color="white" onClick={() => {deleteEvent(event)}}>Delete</Button>
                    </td>
                </tr>
            )
        })
    }

    return(
        <>
        <h3 className='mine-header'>Your Events</h3>
        <hr/>
        <Table>
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

export default EventTable;