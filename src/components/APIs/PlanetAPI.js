import { useState } from 'react';

function PlanetAPI(){

    let url = 'https://api.planet.com/data/v1';
    const [data, setData] = useState([]);

    const getData = () => {
        fetch(url)
        .then(res => res.json())
        .then(json => {
            console.log(json);
            setData(json);
        })
    }
    

    return(
        <div>
            <button onClick={getData}>Planet API Info</button>
        </div>
    )
}

export default PlanetAPI;

/*
RESOURCES:
website: https://developers.planet.com/docs/apis/data/
*/