import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Col, Container, Form, FormGroup, Label, Input, Row } from 'reactstrap';
import { CssBaseline } from '@material-ui/core';
import Greeting from '../site/Greeting';

/* I attempted to merge Background.js --> AuthMVP.js and couldn't do it

var names = ["stargazers", "astronomers", "moon lovers", "constellation seekers", "celestial navigators"];
var randNames = names[Math.floor(Math.random() * names.length)]; 

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height: '100vh',
        fontFamily: 'Pacifico',
        
    },
    appbar: {
        background: 'none',
    },
    appbarWrapper: {
        width: "80%",
        margin: '0 auto',
    },
    appbarTitle: {
        flexGrow: '1',
    },
    icon: {
        color: '#fff',
        fontSize: '2rem',
    },
    colorText:{
        color: '#9999FF',
    },
    container: {
        textAlign: 'center',
    },
    title:{
        color: '#fff',
        fontSize: '4.5rem',
    },
    goDown: {
        color: '#9999FF',
        fontSize: '3em'
    },
}));
function Background() {
    const classes = useStyles();
    const [checked,setChecked] = useState(false);
    useEffect(()=> {
        setChecked(true);
    }, [])
    return ( 
    <div className={classes.root}>
        <AppBar className={classes.appbar} elevation={0}>
            <Toolbar className={classes.appbarWrapper}>
            <h1 className={classes.appbarTitle}><span className={classes.colorText}>Meet Me Under the</span> Moon.</h1>
            <IconButton>
                <SortIcon className={classes.icon} />
            </IconButton>
            </Toolbar>
        </AppBar>

        <Collapse in={checked} 
        { ...(checked ? { timeout: 1000 }: {})} 
          collapsedHeight={50}
        >
        <div className={classes.container}>
            <h1 className={classes.title}> 
                Find fellow <br /> {''}
            <span className={classes.colorText}>{randNames}!</span>
            </h1>
            <IconButton>
                <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
        </div>
      </Collapse>
    </div>
    );
}

*/

const Signup = (props) => {
    const [username, setUsername] = useState("username");
    const [password, setPassword] = useState("password");

    let handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/user/register', {
            method: 'POST', 
            body: JSON.stringify({user:{username: username, passwordhash: password}}),
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
        fetch('http://localhost:3000/user/login', {
            method: 'POST', 
            body: JSON.stringify({user:{username: username, passwordhash: password}}),
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
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height: '40vh',
        fontFamily: 'Pacifico',
        color: '#9999FF',
    },
}));
 export default function AuthMVP(props) {
    const classes = useStyles();
    const [checked,setChecked] = useState(false);
    useEffect(()=> {
        setChecked(true);
    }, [])
    return(
        <Container className={classes.root}>
            
            <Row>
                <Col md="6">
                    <Signup updateToken={props.updateToken} />
                </Col>
                <Col md="6" className="login-col">
                    <Login updateToken={props.updateToken}/>
                </Col>
            </Row>
        </Container>
    )
}
