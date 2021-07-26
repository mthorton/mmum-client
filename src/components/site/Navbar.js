import React, {useState} from 'react';
import EventIndex from './EventIndex';
import Profile from './Profile';
import Home from './Home';
import {Link, Route, Switch} from 'react-router-dom';
import './NavBar.css';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    NavItem,
    Button,
    Nav,
} from 'reactstrap';

const NavBar = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    }

    // const clearToken = () => {
    //     localStorage.clear();
    //     setSessionToken('');
    //   }

    return(
        <Navbar color="faded" light expand="md" className='navbar'>
            {/* <NavbarBrand href="/">Meet Me Under the Moon</NavbarBrand> */}
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml" navbar>
                    <NavItem className='nav-links'>
                        <ul >
                            <li><Link to='/eventfeed'>Home</Link></li>
                            <li><Link to='/createevent'>Create Event</Link></li>
                            <li><Link to='/profile'>Profile</Link></li>
                        </ul>
                    </NavItem>
            <NavbarBrand className='nav-title' href="/"><h1>Meet Me Under the Moon.</h1></NavbarBrand>
                    <NavItem>
                        {/* <Switch>
                         <Route exact path='/eventindex'><EventIndex /></Route>
                         <Route exact path='/createevent'><CreateEvent /></Route>
                         <Route exact path='/profile'><Profile /></Route>
                     </Switch> */}
                    </NavItem>
                    <NavItem>
                        <Button className='nav-button' onClick={props.clickLogout} href='/'>Logout</Button>
                    </NavItem>
                    
                </Nav>
            </Collapse>
        </Navbar>

        
        // <div>
        //     <div>
        //         <ul>
        //             <li><Link to='/'>Home</Link></li>
        //             <li><Link to='/createevents'>Create Event</Link></li>
        //             <li><Link to='/profile'>Profile</Link></li>
        //         </ul>
        //     </div>
        //     <div className='sidebar-route'>
        //         <Switch>
        //             <Route exact path='/'><EventIndex /></Route>
        //             <Route exact path='/createevent'><CreateEvent /></Route>
        //             <Route exact path='/profile'><Profile /></Route>
        //         </Switch>
        //     </div>
        //     <div>
        //         <NavbarBrand href="/">Meet Me Under the Moon</NavbarBrand>
        //         <NavbarToggler onClick={toggle}/>
        //         <Collapse isOpen={isOpen} navbar>
        //             <Nav className="ml-auto" navbar>
        //                 <NavItem>
        //                     <Button onClick={props.clickLogout}>Logout</Button>
        //                 </NavItem>
        //             </Nav>
        //         </Collapse>
        //     </div>
        // </div>
    );
}

export default NavBar;