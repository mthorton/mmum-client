import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SortIcon from '@material-ui/icons/Sort';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import NavBar from './Navbar';

// Adds the elevation scroll property --> blur beneath appbar.

function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}
ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
   
    /* This was the height 
    background: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + "assets/starry_sky.jpg"})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover', 
      }, 
      */

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
    colorText: {
        color: '#9999FF',
    },
    container: {
        textAlign: 'center',
    },
    title: {
        color: '#fff',
        fontSize: '4.5rem',
    },
    goDown: {
        color: '#9999FF',
        fontSize: '3em'
    },
}));

const names = ["stargazers", "astronomers", "moon lovers", "constellation seekers", "celestial navigators"];
const randNames = names[Math.floor(Math.random() * names.length)];



function Greeting() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, [])

    return (
        <div className={classes.background}>
        <div className={classes.root}>
            <CssBaseline />
            <ElevationScroll>
                <AppBar style={{ background: '#2E3B55' }} className={classes.appbar} elevation={0}>
                    <Toolbar  className={classes.appbarWrapper}>
                        <h1 className={classes.appbarTitle}><span className={classes.colorText}>Meet Me Under the</span> Moon.</h1>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Collapse in={checked}
                {...(checked ? { timeout: 1000 } : {})}
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
        </div>
    );
}

export default Greeting;
