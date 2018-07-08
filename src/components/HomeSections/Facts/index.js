import React from 'react';
import rocketImg from '../../../assets/rocket.png';
import rocketSmokeImg from '../../../assets/rocket-smoke.png';
import rocketStarsImg from '../../../assets/rocket-stars.png';
import facts_edge_img from '../../../assets/facts-edge-top.png';
import './Facts.css';

const Facts = () => (
    <div>
        <img src={facts_edge_img} className="facts-top-edge-img"  alt="Edge"/>
        <div id="facts" className="section scrollspy">
            <div className="container">
                <div className="row">
                    <div className="col s12 m5">
                        <h3>Random facts</h3>
                        <h6><i className="fas fa-code"> </i> I love to code</h6>
                        <h6><i className="fas fa-coffee"> </i> I drink a lot of coffee</h6>
                        <h6><i className="fas fa-utensils"> </i> I like to cook</h6>
                        <h6><i className="fas fa-plane "> </i> I like to travel</h6>
                        <h6><i className="fas fa-walking "> </i> I like to walk</h6>
                        <h6><i className="fas fa-user-ninja"> </i> I like to try new things</h6>
                    </div>
                    <div className="col s12 m6 ">
                        <img src={rocketStarsImg} className="facts-img-background" alt="Stars"
                             data-aos="fade-down"
                             data-aos-duration="3000" />

                        <img src={rocketSmokeImg} data-aos="zoom-in-up"
                             data-aos-duration="3000" className="facts-img-bottom" alt="Smoke"/>

                        <img src={rocketImg} className="facts-img" data-aos="fade-up"
                             data-aos-duration="3000" alt="Rocket"/>
                    </div>
                </div>
            </div>
        </div>
    </div>

);

export default Facts;
