import React from 'react';
import M from 'materialize-css';
import './ParallaxSec.css';

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems);
});

const ParallaxSec = (props) => (
    <div className="parallax-container parallax__container__top">
        <div className="parallax parallax__top">
            <img src={props.parallaxImgUrl} alt="Parallax"/>
        </div>

        <div className="caption parallax-caption center-align">
            <h3 className="white-text">Ivan Shyrai</h3>
            <h6 className="white-text">Personal website</h6>
        </div>
    </div>

);

export default ParallaxSec;