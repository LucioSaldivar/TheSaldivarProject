import {BrowserRouter} from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main';
import MyNavBar from './Components/NavigationBar/MyNavBar';
import React,{Component} from 'react';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className='App'>
                    <MyNavBar/>
                    <Main/>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}