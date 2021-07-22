import React, {useState, useEffect} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const EventCreate = (props) => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        handleSubmit();
    }, []);

    const handleSubmit = (e) => {
        //e.preventDefault();
        fetch('http://localhost:3000/log/', {
            method: 'POST',
            body: JSON.stringify({log: {title: title, date: date, location: location, description: description}}),
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${props.token}`
            })
        }).then((res) => res.json())
        .then((logData) => {
            console.log(logData);
            setTitle('');
            setDate('');
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
                    <Label htmlFor="title"/>
                    <Input name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="date"/>
                    <Input type="datetime" value={date} onChange={(e) => setDate(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="location"/>
                    <Input name="location" value={location} onChange={(e) => setLocation(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="description"/>
                    <Input name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                </FormGroup>
                <Button type='submit'>Add Event</Button>
            </Form>
        </>
    );
};

export default EventCreate;

