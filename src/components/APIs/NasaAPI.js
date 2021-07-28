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
            showImage(json);
        })
    }

    const showImage = (apod) => {
        return <img src={apod.image} />
    }
    

    return(
        <div>
            {/* {getApod()}
            <showImage/> */}
        </div>
    )
}

export default NasaAPI;

/*
RESOURCES:
website: https://api.nasa.gov/
*/