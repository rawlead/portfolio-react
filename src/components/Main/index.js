import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";

import Home from '../../containers/Home';
import Welcome from '../../containers/Welcome';

const Main = () => (
    <div>
        <Route exact path="/" component={Welcome}/>
        <Route path='/overview' component={Home}/>
        <Redirect to="/"/>
    </div>
);

export default Main;