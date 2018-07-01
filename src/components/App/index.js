import React, {Component} from 'react';
import '@fortawesome/fontawesome-free/css/all.css'
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

import './App.css';

import Main from '../Main';

class App extends Component {
    render() {
        return (
            <div>
                <Main/>
            </div>
        );
    }
}

export default App;
