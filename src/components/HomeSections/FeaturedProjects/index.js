import React from 'react';
import './FeaturedProjects.css';
import M from 'materialize-css';


document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, {'duration': 0});
});

const FeaturedProjects = (props) => (

    <div id="featured_projects_wrapper" className="section scrollspy">

        <div id="featured_projects" className="section">
            <div className="container">
            <h3 className="featured-section-title">Featured projects</h3>
            </div>
            <div className="slider fullscreen">
                <ul className="slides">
                    <li>
                        <img src={props.featuredImg1} alt="Portal IS"/>
                        <div className="caption left-align">
                            <h3><span>Portal IS</span></h3>
                            <h5><span>Portal for photographers</span></h5>
                            <h5><a className="waves-effect waves-light btn btn-large ">
                                <i className="material-icons left">info</i> details</a></h5>
                        </div>
                    </li>
                    <li>
                        <img src={props.featuredImg2} alt="Filter APP"/>
                        <div className="caption left-align">
                            <h3><span>Filter APP</span></h3>
                            <h5><span>Photo filters online</span></h5>
                            <h5><a className="waves-effect waves-light btn btn-large ">
                                <i className="material-icons left">info</i> details</a></h5>

                        </div>
                    </li>
                    <li>
                        <img src={props.featuredImg3} alt="SAN Travels"/>
                        <div className="caption left-align">
                            <h3><span>SAN Travels</span></h3>
                            <h5><span>Flight search service</span></h5>
                            <h5><a className="waves-effect waves-light btn btn-large ">
                                <i className="material-icons left">info</i> details</a></h5>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);


export default FeaturedProjects;