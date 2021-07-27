import React from 'react';
import { Table} from 'reactstrap'; 
//import APIURL from '../helpers/environment';

const EventFeedTable = (props) => {

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
        <h3 className='feed-header'>Event Feed</h3>
        <hr/>
        <Table>
            <thead className='feed-table'>
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