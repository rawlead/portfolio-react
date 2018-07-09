import React, {Component} from 'react';
import '@fortawesome/fontawesome-free/css/all.css'
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import 'aos/dist/aos.css';
import './App.css';

import {HashRouter, Switch, Route} from 'react-router-dom';

import Home from "../../containers/Home";
import AboutMe from "../../containers/AboutMe";
import Projects from "../../containers/Projects";
import Navbar from "../../components/Navbar";
import FloatingdActionButton from '../../components/FloatingActionButton';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/projects" component={Projects}/>
                        <Route exact path='/aboutMe' component={AboutMe}/>
                    </Switch>
                    <FloatingdActionButton/>
                </div>
            </HashRouter>
        );
    }
}

export default App;
