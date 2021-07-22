import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: '100vh',
      backgroundImage: `url(${process.env.PUBLIC_URL + "assets/starry_sky.jpg"})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover', 
    },
  }));

  export default function Background() {
    const classes = useStyles();
    const [checked,setChecked] = useState(false);
    useEffect(()=> {
        setChecked(true);
    }, [])
    return ( 
    <div className={classes.root}></div>
    )
  }