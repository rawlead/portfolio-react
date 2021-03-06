import React, {Component} from 'react';
import './FeaturedProjects.css';
import M from 'materialize-css';


class FeaturedProjects extends Component {
    componentDidMount() {
        M.Slider.init(this.slider, {'duration': 0});
        M.ScrollSpy.init(this.scrollSpy);
    }

    render() {
        return (
            <div id="featured_projects_wrapper"
                 className="section scrollspy"
                 ref={(scrollSpy) => {
                     this.scrollSpy = scrollSpy
                 }}>

                <div id="featured_projects" className="section">
                    <div className="container">
                        <h3 className="featured-section-title">Featured projects</h3>
                    </div>
                    <div className="slider fullscreen"
                         ref={(slider) => {
                             this.slider = slider
                         }}>
                        <ul className="slides">
                            <li>
                                <img src={this.props.featuredImg1} alt="Portal IS"/>
                                <div className="caption left-align">
                                    <h3>Portal IS</h3>
                                    <h5>Portal for photographers</h5>
                                    <h5><a className="waves-effect waves-light btn btn-large ">
                                        <i className="material-icons left">info</i> details</a></h5>
                                </div>
                            </li>
                            <li>
                                <img src={this.props.featuredImg2} alt="Filter APP"/>
                                <div className="caption left-align">
                                    <h3>Filter APP</h3>
                                    <h5>Photo filters online</h5>
                                    <h5><a className="waves-effect waves-light btn btn-large ">
                                        <i className="material-icons left">info</i> details</a></h5>

                                </div>
                            </li>
                            <li>
                                <img src={this.props.featuredImg3} alt="SAN Travels"/>
                                <div className="caption left-align">
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
        )
    }
}

export default FeaturedProjects;