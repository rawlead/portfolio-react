import React, {Component} from 'react';
import '@fortawesome/fontawesome-free/css/all.css'
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import 'aos/dist/aos.css';
import AOS from 'aos/dist/aos';

import './App.css';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

// import Main from '../Main';
import Welcome from "../../containers/Welcome";
import Home from "../../containers/Home";
import Navbar from "../../components/Navbar";




class App extends Component {
    componentDidMount() {
        AOS.init();
    }

    render() {
        return (

            <Router>
                <div>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" component={Welcome}/>
                        <Route exact path='/overview' component={Home}/>
                    </Switch>
                </div>
            </Router>

        );
    }
}

export default App;
