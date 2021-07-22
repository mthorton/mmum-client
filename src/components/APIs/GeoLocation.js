import { useState } from 'react';

function GeoLocation(){

    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [status, setStatus] = useState(null);

    const getLocation = () => {
        if (!navigator.geolocation) {
        setStatus('Geolocation is not supported by your browser');
        } else {
        setStatus('Locating...');
        navigator.geolocation.getCurrentPosition((position) => {
            setStatus(null);
            setLat(position.coords.latitude);
            setLng(position.coords.longitude);

            // These are the lat and lng to be stored in variable. // Testing 
            console.log(position.coords.latitude + "," + position.coords.longitude) // Testing
            let location = position.coords.latitude + "," + position.coords.longitude;
            //reqData(location);
        }, () => {
            setStatus('Unable to retrieve your location');
        });
        }
    }

    return(
        <div>
            <button onClick={getLocation}>Get Location</button>
        </div>
    )
}

export default GeoLocation;