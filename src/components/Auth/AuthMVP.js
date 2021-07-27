import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Col, Container, Form, FormGroup, Label, Input, Row } from 'reactstrap';
import { CssBaseline } from '@material-ui/core';
import Greeting from '../site/Greeting';
import APIURL from '../../helpers/environment';

const Signup = (props) => {
    const [username, setUsername] = useState("username");
    const [password, setPassword] = useState("password");

    let handleSubmit = (event) => {
        event.preventDefault();
        //fetch(`${APIURL}/user/register`, {
        fetch('http://localhost:3000/user/register', {    
            method: 'POST', 
            body: JSON.stringify({user:{username: username, password: password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
        })
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password}/>
                </FormGroup>
                <Button type="submit">Sign Up</Button>
            </Form>
        </div>
    )
}

// Login Javascript --- Login 'Box'

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault();
        //fetch(`${APIURL}/user/login`, {
        fetch('http://localhost:3000/user/login', {
            method: 'POST', 
            body: JSON.stringify({user:{username: username, password: password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
        })
    }
    
    return (
   
        <div>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password}/>
                </FormGroup>
                <Button type="submit">Login</Button>
            </Form>
        </div>
    )
}

// Page Display

const useStyles = makeStyles((theme) => ({
    text: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height: '40vh',
        fontFamily: 'Pacifico',
        color: '#9999FF', 
    },
        background: {
            minHeight: '100vh',
            backgroundImage: `url(${process.env.PUBLIC_URL + "assets/starry_sky.jpg"})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover', 
    },
}));
 export default function AuthMVP(props) {
    const classes = useStyles();
    const [checked,setChecked] = useState(false);
    useEffect(()=> {
        setChecked(true);
    }, [])
    return(
        <div className={classes.background}>
        <Greeting />
        <Container className={classes.text}>
            <Row>
                <Col md="6">
                    <Signup updateToken={props.updateToken} />
                </Col>
                <Col md="6" className="login-col">
                    <Login updateToken={props.updateToken}/>
                </Col>
            </Row>
        </Container>
        </div>
    )
}
