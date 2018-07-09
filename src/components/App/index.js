import React, {Component} from 'react';
import '@fortawesome/fontawesome-free/css/all.css'
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import 'aos/dist/aos.css';
import AOS from 'aos/dist/aos';

import './App.css';

import {HashRouter, Router, Switch, Route, Link} from 'react-router-dom';

import Home from "../../containers/Home";
import AboutMe from "../../containers/AboutMe";
import Navbar from "../../components/Navbar";

class App extends Component {
    componentDidMount() {
        AOS.init();
    }

    render() {
        return (
            <HashRouter>
                <div>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path='/aboutMe' component={AboutMe}/>
                    </Switch>
                </div>
            </HashRouter>

        );
    }
}

export default App;
