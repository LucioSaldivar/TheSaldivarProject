import {FaBars, FaTimes} from 'react-icons/fa';
import {NavigationLinks} from '../../LinkList/LinkList';
import {NavLink} from 'react-router-dom';
import React, {Component} from 'react';
import './NavMenu.css';

export default class NavMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div className='Navigation'>
                <div className='Toggler' onClick={this.toggle}>
                    <div className='Toggler-Container'>
                        {this.state.isOpen ? <FaTimes className='fa-times'/> : <FaBars className='fa-bars'/>}
                    </div>
                </div>

                <ul className={this.state.isOpen ? 'Nav-Menu Open' : 'Nav-Menu'}>
                    {NavigationLinks.map((item, index) => {
                        return (
                            <li key={index} className='Link-List'>
                                <NavLink activeClaseName={item.stat} to={item.url}>{item.title}</NavLink>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}