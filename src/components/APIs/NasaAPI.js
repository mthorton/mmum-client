import { useState } from 'react';

function NasaAPI(){

    let apiKey = 'mKE6H7Pg9xCy0kZ51YadMOyiFPCsCbSLxzaPfwHc'
    let url = 'https://api.nasa.gov/planetary/apod?api_key=';

    const [apod, setApod] = useState([]);

    // NASA picture of the day. 
    const getApod = () => {
        fetch(url + apiKey)
        .then(res => res.json())
        .then(json => {
            console.log(json);
            setApod(json);
        })
    }
    

    return(
        <div>
            <button onClick={getApod}>NASA APOD</button>
            {/* {getApod()} */}
            <img src={apod.image} />
        </div>
    )
}

export default NasaAPI;

/*
RESOURCES:
website: https://api.nasa.gov/
*/