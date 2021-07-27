import { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import './Auth.css';

const Auth = () => {
    const [signup, setSignup] = useState(true);

    const [username, setName] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');

    const [nameValid, setNameValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [cPasswordValid, setCPasswordValid] = useState(false);

    const [theme, setTheme] = useState('Dark');

    const formFont = {
        fontFamily: 'Pacifico',
    };
        
    const formWrapper = {
        margin: 'auto',
        marginInline: '1em',
        width: '30em',
        minWidth: '12em',
        background: theme === 'Dark' ? 'rgba(0,0,0,.5)' : 'rgba(255,255,255, .6)',
        borderRadius: '1em',
        padding: '2em',
        backdropFilter: 'blur(15px)',
        filter: 'drop-shadow(5px 5px 5px rgba(0,0,0,.3))',
        color: theme === 'Dark' ? 'white' : 'black'
    };

    const formFeedBackStyle = {
        fontSize: '1.2em',
        fontWeight: 'bold',
        userSelect: 'none'
    };

    const inputStyle = {
        textAlign: 'center',
        color: theme === 'Dark' ? 'white' : 'black'

    };

    //----------------VpropsV-----
    const AuthInputs = () => {


        //------------------------------------------------------------
        // let handleRegister = (event) => {
        //     event.preventDefault();
        //     fetch('http://localhost:3000/user/register', {
        //         method: 'POST', 
        //         body: JSON.stringify({user:{username: username, password: password}}),
        //         headers: new Headers({
        //             'Content-Type': 'application/json'
        //         })
        //     }).then(
        //         (response) => response.json()
        //     ).then((data) => {
        //         props.updateToken(data.sessionToken)
        //     })
        // }
        //-------------------------------------------------------------


        return (
            <>
                <HeaderMsg signup={signup} style={formFont}/>

                <FormGroup>
                    <Label htmlFor='username' color='white'>Username</Label>
                    <Input required type='username' id='username' style={inputStyle} valid={nameValid} invalid={!nameValid}
                        onChange={(e) => {
                            setName(e.target.value)
                            if (e.target.value.includes('@') && e.target.value.includes('.')) {
                                setNameValid(true)
                            } else {
                                setNameValid(false)
                            }
                        }}
                    />
                    <FormFeedback style={formFeedBackStyle} invalid>
                        {signup && 'Username must be valid'}
                    </FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label htmlFor='password' color='white'>Password </Label>
                    <Input id='password' style={inputStyle} type='password' invalid={!passwordValid} valid={passwordValid} onChange={(e) => {
                        setPassword(e.target.value)
                        if (e.target.value.length >= 6) {
                            setPasswordValid(true);
                        } else {
                            setPasswordValid(false);
                        }
                        if (cPassword !== e.target.value || cPassword.length === 0) {
                            setCPasswordValid(false);
                        } else {
                            setCPasswordValid(true);
                        }
                    }} />
                    <FormFeedback style={formFeedBackStyle} invalid>
                        {signup && 'Password must be at least 6 characters'}
                    </FormFeedback>
                </FormGroup>

                {signup &&
                    <FormGroup>
                        <Label htmlFor='cpassword' color='white'>Confirm Password</Label>
                        <Input id='cpassword' style={inputStyle} type='password' invalid={!cPasswordValid} valid={cPasswordValid}
                            onChange={(e) => {
                                setCPassword(e.target.value)
                                if (password === e.target.value && e.target.value.length !== 0) {
                                    setCPasswordValid(true);
                                } else if (cPassword !== password) {
                                    setCPasswordValid(false);
                                } else {
                                    setCPasswordValid(false);
                                }

                            }}
                        />
                        <FormFeedback style={formFeedBackStyle}>
                            {
                                cPassword.length === 0
                                    ?
                                    'Please confirm your password'
                                    :
                                    cPassword !== password
                                        ?
                                        'Passwords do not match'
                                        :
                                        null
                            }
                        </FormFeedback>
                    </FormGroup>
                }
            </>
        )
    }

    return (
        <div style={formWrapper} id='formWrapper'>
            <Form>
                {AuthInputs()}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <Button onClick={() => {
                        setSignup(!signup)
                        setCPasswordValid(false)
                    }}>
                        {signup ? 'Login' : 'Signup'}
                    </Button>
                    
                    <Button color={theme === 'Dark' ? 'dark' : 'light'} onClick={() => {
                        theme === 'Dark' ? setTheme('Light') : setTheme('Dark')
                    }}>
                        {theme}
                    </Button>

                    {signup
                        ?
                        <Button color='primary' type='submit' disabled={nameValid && passwordValid && cPasswordValid ? false : true}>
                            Submit
                        </Button>
                        :
                        <Button color='primary' type='submit' disabled={nameValid && passwordValid ? false : true}>Submit</Button>
                    }
                </div>
            </Form>
        </div>
    )
}

const HeaderMsg = props => {
    return (
        <h2> {props.signup ? 'Signup' : 'Login'}</h2>
    )
}

export default Auth;