import React, {Component} from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import home_img from '../../assets/IVAN.png';

import './Welcome.css'


class Welcome extends Component {
    render() {
        return (
            <div id="home-page" style={{minHeight: '100%'}}>
                <Navbar/>
                <div className="row">
                    <div className="col s12">
                        <h1 className="hero-text">IVAN</h1>
                        <div className="home-page-img center-align"> </div>
                    </div>
                </div>
                <div className="row" style={{marginBottom: 0}}>
                    <div className="col s12 home-page-nav">
                        <h2><a style={{color: "#FF3E23"}} href="/overview">Overview</a></h2>
                        <h2><a style={{color: "#FFD39B"}} href="/">Portfolio</a></h2>
                        <h2><a style={{color: "#4BBDAC"}} href="/">Dev</a></h2>
                        <h2><a style={{color: "#F6B34E"}} href="/">More</a></h2>
                    </div>
                </div>
            </div>

        )
    }
}

export default Welcome;