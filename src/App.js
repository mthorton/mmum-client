import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Footer from './components/site/Footer';
import Header from './components/site/Header';
import {
  BrowserRouter as Router
} from 'react-router-dom';
// import Auth from './components/Auth/Auth';
import AuthMVP from './components/Auth/AuthMVP';

import Home from './components/site/Home';
import NavBar from './home/NavBar';
import Background from './components/site/Background';

// import { makeStyles } from '@material-ui/styles';
// import { CssBaseline } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + "assets/starry_sky.jpg"})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover', 
  },
}));

function App() {

  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ? <Home token={sessionToken}/>
    : <AuthMVP updateToken={updateToken}/>)
  }

  const classes = useStyles();
  return(
    <div className={classes.root}>
    <CssBaseline />
    <Header />
    <div className='App'>
      <NavBar clickLogout={clearToken}/>
      {protectedViews()}
    </div>
    </div>
  );
}

export default App;

/* This was the old code for the Material-UI code.
 const useStyles = makeStyles(theme => ({
   root: {
     minHeight: '100vh',
     backgroundImage: `url(${process.env.PUBLIC_URL + "assets/starry_sky.jpg"})`,
     backgroundRepeat: 'no-repeat',
     backgroundSize: 'cover', 
   }
   })
 )

 export default function App() {
      const classes = useStyles();
   return(
   <div className={classes.root}>
     <CssBaseline />
      <Header />
     <Auth />
     <Footer />
   </div>
   );
 }
 */