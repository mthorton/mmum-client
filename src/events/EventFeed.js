import React from 'react';
import { Table } from 'reactstrap'; // forgot single quotes

const EventFeed = (props) => {

    const fetchEvents = () => {
        fetch('http://localhost:3000/log/all', {
        method: "GET",
        headers: new Headers({
            'Content-Type': "application/json",
            'Authorization': props.token //`Bearer ${props.token}`
        })
    }).then((res) => res.json())
    .then((logData) => {
        console.log(logData);
        //eventMapper(logData);
    }).catch((error) => {
        //console.error(error);
    })
    };

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
                {fetchEvents()}
            </tbody>
        </Table>
        </>
    )
}

export default EventFeed;