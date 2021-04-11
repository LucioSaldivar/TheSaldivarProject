import React, {Component} from 'react';
import {SocialMediaLinks} from '../LinkList/LinkList';
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div className='Footer'>
                <div className='SocialLinks'>
                    {SocialMediaLinks.map((item, index) => {
                        return <a key={index} href={item.url}> {item.icon} </a>
                    })}
                </div>

                <div className='CopyRight'>
                    <p>Infinri © {(new Date().getFullYear())}</p>
                </div>
            </div>
        );
    }
}