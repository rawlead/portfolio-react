import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from '../../containers/Home';
import Welcome from '../../containers/Welcome';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path='/overview' component={Home} />
    </Switch>
);

export default Main;