import {Link} from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import React, { useState, useEffect } from 'react';

import EventIndex from '../../events/EventIndex';
import EventFeed from '../../events/EventFeed';
import NasaAPI from '../APIs/NasaAPI';
import MoonCalcAPI from '../APIs/MoonCalcAPI';

const Home = (props) => {

    const [events, setEvents] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [eventToUpdate, setEventToUpdate] = useState({});

    return(
        <div className='main'>
            <div className='mainDiv'>
                <h1>Meet Me Under the Moon</h1>
                <ul>
                    <li>
                        {/* <MoonCalcAPI/> */}
                        <EventIndex />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Home;