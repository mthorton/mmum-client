import {useState} from 'react';
// import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';

const LogEdit = (props) => {

    const [editTitle, setEditTitle] = useState(props.logToUpdate.title);
    const [editDesc, setEditDesc] = useState(props.logToUpdate.description);
    const [editDate, setEditDate] = useState(props.logToUpdate.date);
    const [editLocation, setEditLocation] = useState(props.logToUpdate.location);

    const logUpdate = (event, log) => {
        event.preventDefault();
        fetch(`http://localhost:3000/log/${props.logToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({log: {title: editTitle, description: editDesc, date: editDate, location: editLocation}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${props.token}`
            })
        }).then((res) => {
            props.fetchWorkouts();
            props.updateOff();
        })
    }

    return (
        <Modal isOpen={true}>
            <ModalHeader>Edit An Event</ModalHeader>
            <ModalBody>
                <Form onSubmit={logUpdate}>
                <FormGroup>
                    <Label htmlFor="title"/>
                    <Input name="title" value={title} onChange={(e) => setEditTitle(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="description"/>
                    <Input name="description" value={description} onChange={(e) => setEditDesc(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="date"/>
                    <Input name="date" value={date} onChange={(e) => setEditDate(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="location"/>
                    <Input name="location" value={location} onChange={(e) => setEditLocation(e.target.value)}/>
                </FormGroup>
                    <Button type="submit">Update the workout!</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default LogEdit;