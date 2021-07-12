import { useState } from 'react';

function IssLocation(){

    let url = 'https://api.wheretheiss.at/v1/satellites';
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
            <button onClick={getData}>ISS Location Info</button>
        </div>
    )

}

export default IssLocation

/*
RESOURCES:
website: https://wheretheiss.at/w/developer
*/