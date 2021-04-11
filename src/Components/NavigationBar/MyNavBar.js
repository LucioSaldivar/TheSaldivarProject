import React, {Component} from 'react';
import Logo from './Logo/Logo';
import NavMenu from './NavMenu/NavMenu';
import './MyNavBar.css';

export default class MyNavBar extends Component {
    render() {
        return (
            <nav className='Navbar'>
                <Logo/>
                <span className='Filter'/>
                <NavMenu/>
            </nav>
        );
    }
}