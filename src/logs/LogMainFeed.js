import {useState} from 'react';
// import {Table, Button} from 'reactstrap';

const LogFeed = (props) => {

    const logMapper = () => {
        return props.logs?.map((log, index) => {
            return (
                <tr key={index}>
                    <th scope="row">{log.id}</th>
                    <td>{log.title}</td>
                    <td>{log.description}</td>
                    <td>{log.date}</td>
                    <ts>{log.location}</ts>
                    {/* <td>
                        <Button color="warning" onClick={() => {props.editUpdateWorkout(workout); props.updateOn()}}>Update</Button>
                        <Button color="danger" onClick={() => {deleteWorkout(workout)}}>Delete</Button>
                    </td> */}
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
                    <th>Description</th>
                    <th>Date</th>
                    <th>Location</th>
                </tr>
            </thead>
            <tbody>
                {logMapper()}
            </tbody>
        </Table>
        </>
    )
}

export default LogFeed;