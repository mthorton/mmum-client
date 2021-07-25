import {Link, Route, Switch} from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import React, { useState, useEffect } from 'react';

import EventIndex from './EventIndex';
import Profile from './Profile';
import EventFeed from '../../events/EventFeed';

import NasaAPI from '../APIs/NasaAPI';
import MoonCalcAPI from '../APIs/MoonCalcAPI';
import NavBar from './Navbar';
import AuthMVP from '../Auth/AuthMVP';

const Home = () => {

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
        <div>
            <NavBar clickLogout={clearToken}/>
            <Switch>
                <Route exact path='/eventfeed'><EventFeed /></Route>
                <Route exact path='/create'><EventIndex /></Route>
                <Route exact path='/profile'><Profile /></Route>
            </Switch>
        </div>
    );
};

export default Home;