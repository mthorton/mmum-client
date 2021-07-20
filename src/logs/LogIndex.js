import React, {useState, useEffect} from 'react';
// import {Container, Row, Col} from 'reactstrap';
import LogCreate from './LogCreate';
import LogEdit from './LogEdit';
import LogTable from './LogTable';
import LogFeed from './LogMainFeed';

const LogIndex = (props) => {

    const [logs, setLogs] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [logToUpdate, setLogToUpdate] = useState({});

    const fetchLogs = () => {
        fetch('http://localhost:3000/log/', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${props.token}`
            })
        }).then((res) => res.json())
            .then((logData) => {
                setLogs(logData)
                console.log(logData)
            })
    };

    const editUpdateLog = (workout) => {
        setLogToUpdate(workout);
        console.log(workout);
    }

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }

    useEffect(() => {
        fetchLogs();
    }, [])

    return (
        <Container>
            <Row>
                <Col md="3">
                    <LogCreate fetchLogs={fetchLogs}/>
                </Col>
                <Col md="9">
                    <LogFeed workouts={workouts} editUpdateWorkout={editUpdateLog} updateOn={updateOn} fetchLogs={fetchLogs} token={props.token} />
                </Col>
                {updateActive ? <LogEdit workoutToUpdate={logToUpdate} updateOff={updateOff} token={props.token} fetchLogs={fetchLogs}/> : <></>}
            </Row>
        </Container>
    )
}

export default LogIndex;