import React, {Component} from 'react';
import logo from '../../../Img/S.png';
import './Logo.css';

export default class Logo extends Component {
    render() {
        return (
            <div className='Logo-Container'>
                <div className='Logo-Title-Before'>
                    <h2>The</h2>
                </div>

                <div className='Logo'>
                    <img src={logo} alt=''/>
                </div>

                <div className='Logo-Title-After'>
                    <h1 className='Logo-Lastname'>aldivar </h1>
                    <h2 className='Logo-Finish'>Project</h2>
                </div>
            </div>
        );
    }
}