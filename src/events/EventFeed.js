import React from 'react';
import { Table } from 'reactstrap'; // forgot single quotes

const EventFeed = (props) => {

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
                    <th>Title</th>
                    <th>Date</th>
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

export default EventFeed;