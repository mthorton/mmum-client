import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SortIcon from '@material-ui/icons/Sort';

// randomizes the greeting identification every time the page is loaded.

var names = ["stargazers", "astronomers", "moon lovers", "constellation seekers", "celestial navigators"];
var randNames = names[Math.floor(Math.random() * names.length)]; 

// css styling.

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height: '100vh',
        fontFamily: 'Pacifico',
        
    },
    appbar: {
        background: 'none',
    },
    appbarWrapper: {
        width: "80%",
        margin: '0 auto',
    },
    appbarTitle: {
        flexGrow: '1',
    },
    icon: {
        color: '#fff',
        fontSize: '2rem',
    },
    colorText:{
        color: '#9999FF',
    },
    container: {
        textAlign: 'center',
    },
    title:{
        color: '#fff',
        fontSize: '4.5rem',
    },
    goDown: {
        color: '#9999FF',
        fontSize: '3em'
    },
}));

// exporting the Header function, sets state

export default function Header() {
    const classes = useStyles();
    const [checked,setChecked] = useState(false);
    useEffect(()=> {
        setChecked(true);
    }, [])

// content

    return ( 
    <div className={classes.root}>
        <AppBar className={classes.appbar} elevation={0}>
            <Toolbar className={classes.appbarWrapper}>
            <h1 className={classes.appbarTitle}><span className={classes.colorText}>Meet Me Under the</span> Moon.</h1>
            <IconButton>
                <SortIcon className={classes.icon} />
            </IconButton>
            </Toolbar>
        </AppBar>

        <Collapse 
        in={checked} 
        { ...(checked ? { timeout: 1000 }: {})} 
          collapsedHeight={50}
        >
        <div className={classes.container}>
            <h1 className={classes.title}> 
                Find fellow <br /> {''}
            <span className={classes.colorText}>{randNames}!</span>
            </h1>
            <IconButton>
                <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
        </div>
      </Collapse>
    </div>
    );
}