import {useState} from 'react';
// import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

const LogCreate = (props) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/log/', {
            method: 'POST',
            body: JSON.stringify({log: {title: title, description: description, date: date, location: location}}),
            headers: new Headers({
                'Content-Type' : 'application/json',
                // 'Authorization' : `Bearer ${props.token}`
            })
        }).then((res) => res.json())
            .then((logData) => {
                console.log(logData);
                setTitle('');
                setDescription('');
                setDate('');
                setLocation('');
                props.fetchLogs();
            })
    }

    return (
        <>
            <h3>Log An Event</h3>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="title"/>
                    <Input name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="description"/>
                    <Input name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="date"/>
                    <Input name="date" value={date} onChange={(e) => setDate(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="location"/>
                    <Input name="location" value={location} onChange={(e) => setLocation(e.target.value)}/>
                </FormGroup>
                <Button type="submit">Click to Submit</Button>
            </Form>
        </>
    )
}

export default LogCreate;