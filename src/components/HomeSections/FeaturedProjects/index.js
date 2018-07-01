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
                <h3>Featured projects</h3>
                <div className="slider fullscreen">
                    <ul className="slides">
                        <li>
                            <img src={props.featuredImg1} alt="Portal IS"/>
                            <div className="caption center-align">
                                <h3>Portal IS</h3>
                                <h5>Portal for photographers</h5>
                                <h5><a className="waves-effect waves-light btn btn-large ">
                                    <i className="material-icons left">info</i> details</a></h5>
                            </div>
                        </li>
                        <li>
                            <img src={props.featuredImg2} alt="Filter APP"/>
                            <div className="caption center-align">
                                <h3>Filter APP</h3>
                                <h5>Photo filters online</h5>
                                <h5><a className="waves-effect waves-light btn btn-large ">
                                    <i className="material-icons left">info</i> details</a></h5>

                            </div>
                        </li>
                        <li>
                            <img src={props.featuredImg3} alt="SAN Travels"/>
                            <div className="caption center-align">
                                <h3>SAN Travels</h3>
                                <h5>Flight search service</h5>
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