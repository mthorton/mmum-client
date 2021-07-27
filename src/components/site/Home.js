import {Redirect, Route, Switch} from 'react-router-dom';
//import { Container, Row, Col } from 'reactstrap';
import React, { useState, useEffect } from 'react';
import './Home.css';

import EventIndex from './EventIndex';
import Profile from './Profile';
import EventFeed from '../../events/EventFeed';

import NavBar from './Navbar';
//import AuthMVP from '../Auth/AuthMVP';

const Home = (props) => {

    // const [events, setEvents] = useState([]);
    // const [updateActive, setUpdateActive] = useState(false);
    // const [eventToUpdate, setEventToUpdate] = useState({});

    const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

    return(
        <div className='home-page'>
            <NavBar clickLogout={clearToken}/>
            
            <Switch>
                <Route exact path='/' component={() => (<Redirect to='/eventfeed' />)} />
                <Route exact path='/eventfeed'><EventFeed /></Route>
                <Route exact path='/createevent'><EventIndex token={props.token} /></Route>
                <Route exact path='/profile'><Profile /></Route>
            </Switch>
            
        </div>
    );
};

export default Home;