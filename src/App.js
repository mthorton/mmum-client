import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Footer from './components/site/Footer';
import Header from './components/site/Header';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import Auth from './components/Auth/Auth';

// import { makeStyles } from '@material-ui/styles';
// import { CssBaseline } from '@material-ui/core';

function App() {
  return(
    <div className='App'>
      <Header />
      <Auth />
      <Router></Router>
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