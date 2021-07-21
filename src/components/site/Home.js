import {Link} from 'react-router-dom';
import EventIndex from '../../events/EventIndex';

const Home = () => {
    return(
        <div className='main'>
            <div className='mainDiv'>
                <h1>Meet Me Under the Moon</h1>
                <ul>
                    <li>
                        <EventIndex />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Home;