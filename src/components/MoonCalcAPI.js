import { useState } from 'react';

function MoonCalcAPI(){

    let url = 'https://mooncalc.org/#/lat,lon,zoom/date/time/objectlevel/maptype';
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
            <button onClick={getData}>MoonCalc Info</button>
        </div>
    )
}

export default MoonCalcAPI;

/*
RESOURCES:
website: https://www.torsten-hoffmann.de/web.html#mondverlauf
website: https://www.mooncalc.org/#/49.495,11.073,2/2021.07.12/12:38/1/3
website: https://www.torsten-hoffmann.de/apis/suncalcmooncalc/link_en.html
*/