import React from 'react';
import './Footer.css';

const Footer = (props) => (
    <footer className="page-footer section scrollspy" id="contact">

        {props.children}

        <div className="container">
            <div className="row">
                <div className="col s12 m10">
                    <h3>get in touch</h3>
                    <ul>
                        <li className="social-link">
                            <a style={props.facebookColor}
                               className="waves-effect btn"
                               href="https://www.facebook.com/q0h44"
                               target="_blank"
                               rel="noopener noreferrer">
                                <i className="fab fa-facebook"> </i> facebook
                            </a>
                        </li>
                        <li className="social-link">
                            <a style={props.githubColor}
                               className="waves-effect btn black"
                               href="https://github.com/rawlead"
                               target="_blank"
                               rel="noopener noreferrer">
                                <i className="fab fa-github-square"> </i> github
                            </a>
                        </li>
                        <li className="social-link">
                            <a style={props.instagramColor}
                               className="waves-effect btn"
                               href="https://www.instagram.com/ivanshyrai/"
                               target="_blank"
                               rel="noopener noreferrer">
                                <i className="fab fa-instagram"> </i> instagram
                            </a>
                        </li>
                        <li className="social-link">
                            <a style={props.linkedinColor}
                               className="waves-effect btn"
                               href="https://www.linkedin.com/in/ivan-shyrai/"
                               target="_blank"
                               rel="noopener noreferrer">
                                <i className="fab fa-linkedin"> </i> linkedin
                            </a>
                        </li>
                        <li className="social-link">
                            <a style={props.emailColor}
                               className="waves-effect black btn"
                               href="mailto:ivanshyrai@mail.com"
                               target="_blank"
                               rel="noopener noreferrer">
                                <i className="fas fa-envelope"> </i> email
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="col s12 m2">
                    <h3 className="white-text"><i className="far fa-compass fa-spin"> </i></h3>
                    <ul>
                        <li><a className="grey-text text-lighten-3" href="/">Home</a></li>
                        <li><a className="grey-text text-lighten-3" href="/">Projects</a></li>
                        <li><a className="grey-text text-lighten-3" href="/">Dev</a></li>
                        <li><a className="grey-text text-lighten-3" href="/">More</a></li>
                    </ul>
                </div>
                <div className="col s12">
                    <div>
                        <i className="material-icons">copyright</i> 2018 Warsaw
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;