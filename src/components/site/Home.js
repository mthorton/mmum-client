import {Link} from 'react-router-dom';
import EventIndex from '../../events/EventIndex';
import EventFeed from '../../events/EventFeed';
import NasaAPI from '../NasaAPI';
import MoonCalcAPI from '../MoonCalcAPI';

const Home = () => {
    return(
        <div className='main'>
            <div className='mainDiv'>
                <h1>Meet Me Under the Moon</h1>
                <ul>
                    <li>
                        {/* <MoonCalcAPI/> */}
                        <NasaAPI />
                        <EventFeed/>
                        {/* <EventIndex /> */}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Home;