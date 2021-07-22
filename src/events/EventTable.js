import React from 'react';
import { Table, Button } from 'reactstrap'; // forgot single quotes

const EventTable = (props) => {

    const deleteEvent = (event) => {
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
                    <td>
                        <Button color="warning" onClick={() => {props.editUpdateEvent(event); props.updateOn()}}>Update</Button>
                        <Button color="danger" onClick={() => {deleteEvent(event)}}>Delete</Button>
                    </td>
                </tr>
            )
        })
    }

    return(
        <>
        <h3>Event History</h3>
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

export default EventTable;