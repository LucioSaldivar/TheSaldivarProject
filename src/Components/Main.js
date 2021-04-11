import Contact from './Contact/Contact';
import Blog from './Blog/Blog';
import Home from './Home/Home';
import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

export default class Main extends Component {
    render() {
        return (
            <div className='Main'>
                <Switch>
                    <Route path='/home' component={Home}/>
                    <Route path='/contact' component={Contact}/>
                    <Route path='/blog' component={Blog}/>
                    <Redirect to='/home'/>
                </Switch>
            </div>
        );
    }
}