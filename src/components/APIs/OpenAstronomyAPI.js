import { useState } from 'react';

function OpenAstronomyAPI(){

    let urlReadMe = 'https://api.astrocats.space/';
    let urlSupernova = 'https://api.sne.space/';
    let urlTidalDisruption = 'https://api.tde.space/';
    let urlKilonova = 'https://api.kilonova.space/';
    let urlFastStars = 'https://api.faststars.space/';

    const [readMe, setReadMe] = useState([]);
    const [supernova, setSupernova] = useState([]);
    const [tidalDis, setTidalDis] = useState([]);
    const [kilonova, setKilonova] = useState([]);
    const [fastStars, setFastStars] = useState([]);

    const getReadMe = () => {
        fetch(urlReadMe)
        .then(res => res.json())
        .then(json => {
            console.log(json);
            setReadMe(json);
        })
    }

    const getSupernova = () => {
        fetch(urlSupernova + 'object')
        .then(res => res.json())
        .then(json => {
            console.log(json);
            setSupernova(json);
        })
    }

    const getTidalDisruption = () => {
        fetch(urlTidalDisruption)
        .then(res => res.json())
        .then(json => {
            console.log(json);
            setTidalDis(json);
        })
    }

    const getKilonova = () => {
        fetch(urlKilonova)
        .then(res => res.json())
        .then(json => {
            console.log(json);
            setKilonova(json);
        })
    }

    const getFastStars = () => {
        fetch(urlFastStars)
        .then(res => res.json())
        .then(json => {
            console.log(json);
            setFastStars(json);
        })
    }
    

    return(
        <div>
            <button onClick={getReadMe}>Open Astronomy ReadMe</button>
            <button onClick={getSupernova}>Open Astronomy Supernova</button>
            <button onClick={getTidalDisruption}>Open Astronomy Tidal Disruption</button>
            <button onClick={getKilonova}>Open Astronomy Kilonova</button>
            <button onClick={getFastStars}>Open Astronomy Fast Stars</button>
        </div>
    )
}

export default OpenAstronomyAPI;

/*
RESOURCES:
website: https://github.com/astrocatalogs/OACAPI
*/