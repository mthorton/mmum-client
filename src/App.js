import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Footer from './components/site/Footer';
import Header from './components/site/Header';
import Auth from './components/Auth/Auth';
import EventIndex from './events/EventIndex';

// import { makeStyles } from '@material-ui/styles';
// import { CssBaseline } from '@material-ui/core';

function App() {
  const [sessionToken, setSessionToken] = useState('')

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

  // const clearToken = () => {
  //   localStorage.clear();
  //   setSessionToken('');
  // }

  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ? <EventIndex token={sessionToken}/>
    : <Auth updateToken={updateToken}/>)
  }

  return(
    <div className='App'>
      <Header />
      {protectedViews()}
      <Footer />
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