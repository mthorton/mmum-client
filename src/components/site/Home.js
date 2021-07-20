import {Link} from 'react-router-dom';

const Home = () => {
    return(
        <div className='main'>
            <div className='mainDiv'>
                <h1>Meet Me Under the Moon</h1>
                <ul>
                    <li>
                        <Link to='/eventlog'>Events</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Home;