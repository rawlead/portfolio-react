import React, {Component} from 'react';
import FixedActionButton from '../../components/FixedActionButton';

import './Home.css'

class Home extends Component {
    render() {
        return (
            <div id="home-page">

                <h1 className="hero-text">IVAN</h1>
                <div className="home-page-img center-align"> </div>

                <div className="home-page-nav ">
                    <h2><a style={{color: "#FF3E23"}} href="/">Projects</a></h2>
                    {/*<h2><a style={{color: "#FFD39B"}} href="/">Projects</a></h2>*/}
                    <h2><a style={{color: "#4BBDAC"}} href="/aboutMe">About Me</a></h2>
                    <h2><a style={{color: "#F6B34E"}} href="/">More</a></h2>
                </div>
                <FixedActionButton/>
            </div>
        )
    }
}

export default Home;