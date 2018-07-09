import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './Home.css'

class Home extends Component {
    render() {
        return (
            <div id="home-page">

                <h1 className="hero-text">IVAN</h1>
                <div className="home-page-img center-align"> </div>

                <div className="home-page-nav ">
                    <h2><Link to="/projects" style={{color: "#FF3E23"}}>Projects</Link></h2>
                    {/*<h2><a style={{color: "#FFD39B"}} href="/">Projects</a></h2>*/}
                    <h2><Link to="/aboutMe" style={{color: "#4BBDAC"}}>About Me</Link></h2>
                    <h2><Link to="/resume" style={{color: "#F6B34E"}}>Resume</Link></h2>
                </div>
            </div>
        )
    }
}

export default Home;