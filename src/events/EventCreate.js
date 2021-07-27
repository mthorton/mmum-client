import React, {useState, useEffect} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
//import APIURL from '../helpers/environment';

const EventCreate = (props) => {
    const [date, setDate] = useState('');
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');

    // useEffect(() => {
    //     handleSubmit();
    // }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        //fetch(`${APIURL}/log/`, {
        fetch(`http://localhost:3000/log/create/`, {  
            method: 'POST',
            body: JSON.stringify({log: {date: date, title: title, location: location, description: description}}),
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${props.token}`
            })
        }).then((res) => res.json())
        .then((logData) => {
            console.log(logData);
            setDate('');
            setTitle('');
            setLocation('');
            setDescription('');
            props.fetchEvents();
        })
    };

    return(
        <>
            <h3>Create an Event</h3>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="dateString">Date: </Label>
                    <Input type="dateString" value={date} onChange={(e) => setDate(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="title">Event Title: </Label>
                    <Input name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="location">Location: </Label>
                    <Input name="location" value={location} onChange={(e) => setLocation(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="description">Description: </Label>
                    <Input name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                </FormGroup>
                <Button type="submit">Add Event</Button>
            </Form>
        </>
    );
};

export default EventCreate;

