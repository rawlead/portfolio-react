import React from 'react';
import rocketImg from '../../../assets/rocket.png';
import './FactsSec.css';

const FactsSec = () => (

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
                <div className="col s12 m6 hide-on-small-only">
                    <img src={rocketImg} className="facts-img" alt="Rocket" />
                </div>
            </div>
        </div>
    </div>
);

export default FactsSec;
