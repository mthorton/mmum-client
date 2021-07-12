import { useState } from 'react';

function TheSolarSystemAPI(){

    let url = 'https://api.le-systeme-solaire.net/en/';
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
            <button onClick={getData}>The Solar System API Info</button>
        </div>
    )
}

export default TheSolarSystemAPI;

/*
RESOURCES:
website: https://api.le-systeme-solaire.net/en/
*/