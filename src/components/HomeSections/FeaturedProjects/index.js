import React from 'react';
import './FeaturedProjects.css';
import M from 'materialize-css';

document.addEventListener('DOMContentLoaded', function() {
    const elems = document.querySelectorAll('.slider');
    M.Slider.init(elems);
});

const FeaturedProjects = (props) => (
    <div id="featured_projects" className="section scrollspy">
        <div className="container">
            <div className="row">
                <div className="col s12 m11">
                    <h3>Featured projects</h3>
                    <div className="slider ">
                        <ul className="slides z-depth-3">
                            <li>
                                <img src={props.featuredImg1} alt="Portal IS" />
                                <div className="caption left-align">
                                    <h3>Portal IS</h3>
                                    <h5>Portal for photographers</h5>
                                    <h5><a className="waves-effect waves-light btn btn-large z-depth-3">
                                        <i className="material-icons left">info</i> details</a></h5>
                                </div>
                            </li>
                            <li>
                                <img src={props.featuredImg2} alt="Filter APP"/>
                                <div className="caption left-align">
                                    <h3>Filter APP</h3>
                                    <h5>Photo filters online</h5>
                                    <h5><a className="waves-effect waves-light btn btn-large z-depth-3">
                                        <i className="material-icons left">info</i> details</a></h5>

                                </div>
                            </li>
                            <li>
                                <img src={props.featuredImg3} alt="SAN Travels" />
                                <div className="caption left-align">
                                    <h3>SAN Travels</h3>
                                    <h5>Flight search service</h5>
                                    <h5><a className="waves-effect waves-light btn btn-large z-depth-3">
                                        <i className="material-icons left">info</i> details</a></h5>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default FeaturedProjects;