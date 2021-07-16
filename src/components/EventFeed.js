import React from 'react';
import {Table, Button} from 'reactstrap';

const EventFeed = (props) => {

    const deleteWorkout = (event) => {
        fetch(`http://localhost:3000/log/${event.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        })
        .then(() => props.fetchWorkouts())
    }

    const eventMapper = () => {
        return props.events?.map((event, index) => {
            return (
                <tr key={index}>
                    <th scope="row">{event.id}</th>
                    <td>{event.result}</td>
                    <td>{event.description}</td>
                    <td>{event.definition}</td>
                    <td>
                        <Button onClick={() => {props.editUpdateWorkout(event); props.updateOn()}}>Update</Button>
                        <Button onClick={() => {deleteWorkout(event)}}>Delete</Button>
                    </td>
                </tr>
            )    
        })      
    }

    return (
        <>
        <h3>Workout History</h3>
        <hr/>
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Result</th>
                    <th>Description</th>
                    <th>Definition</th>
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