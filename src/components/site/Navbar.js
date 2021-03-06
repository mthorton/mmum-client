import React, {useState} from 'react';
// import EventIndex from './EventIndex';
// import Profile from './Profile';
// import Home from './Home';
import {Link} from 'react-router-dom';
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
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import EventIcon from '@material-ui/icons/Event';

const NavBar = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    }

    return(
        <Navbar color="faded" light expand="md" className='navbar'>
            {/* <NavbarBrand href="/">Meet Me Under the Moon</NavbarBrand> */}
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml" navbar>
                    <NavItem className='nav-links'>
                        <ul >
                            <li><Link to='/eventfeed'><HomeIcon/></Link></li>
                            <li><Link to='/createevent'><EventIcon/></Link></li>
                            <li><Link to='/profile'><AccountCircleIcon/></Link></li>
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
                        <Button className='nav-button' onClick={props.clickLogout} href='/'><ExitToAppIcon/></Button>
                    </NavItem>
                    
                </Nav>
            </Collapse>
        </Navbar>

    );
}

export default NavBar;