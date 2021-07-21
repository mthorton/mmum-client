import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Footer from './components/site/Footer';
import Header from './components/site/Header';
<<<<<<< HEAD
import Auth from './components/Auth/Auth';
import EventIndex from './events/EventIndex';
=======
import {
  BrowserRouter as Router
} from 'react-router-dom';
// import Auth from './components/Auth/Auth';
import AuthMVP from './components/Auth/AuthMVP';

import { useState, useEffect } from 'react';
import Home from './components/site/Home';
import NavBar from './home/NavBar';
>>>>>>> ad303cffdf001884e55d3325186d06e8f30289f6

// import { makeStyles } from '@material-ui/styles';
// import { CssBaseline } from '@material-ui/core';

function App() {
<<<<<<< HEAD
  const [sessionToken, setSessionToken] = useState('')
=======

  const [sessionToken, setSessionToken] = useState('');
>>>>>>> ad303cffdf001884e55d3325186d06e8f30289f6

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

<<<<<<< HEAD
  // const clearToken = () => {
  //   localStorage.clear();
  //   setSessionToken('');
  // }

  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ? <EventIndex token={sessionToken}/>
    : <Auth updateToken={updateToken}/>)
=======
  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ? <Home token={sessionToken}/>
    : <AuthMVP updateToken={updateToken}/>)
>>>>>>> ad303cffdf001884e55d3325186d06e8f30289f6
  }

  return(
    <div className='App'>
<<<<<<< HEAD
      <Header />
      {protectedViews()}
      <Footer />
=======
      <NavBar clickLogout={clearToken}/>
      {protectedViews()}
>>>>>>> ad303cffdf001884e55d3325186d06e8f30289f6
    </div>
  );
}

export default App;

// const useStyles = makeStyles(theme => ({
//   root: {
//     minHeight: '100vh',
//     backgroundImage: `url(${process.env.PUBLIC_URL + "assets/starry_sky.jpg"})`,
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover', 
//   }
//   })
// )

// export default function App() {
//   const classes = useStyles();
//   return(
//   <div className={classes.root}>
//     <CssBaseline />
//     <Header />
//     <Auth />
//     <Footer />
//   </div>
//   );
// }