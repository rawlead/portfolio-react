import React from 'react';
import M from 'materialize-css';

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(elems);
});

const FixedActionButton = (props) => (
    <div className="fixed-action-btn">
        <a className="btn-floating btn-large">
            <i className="large material-icons">mode_edit</i>
        </a>
        <ul>
            <li><a style={props.facebookColor} className=" btn-floating"
                                           href="https://www.facebook.com/q0h44" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"> </i></a></li>

            <li><a style={props.githubColor} className="btn-floating black" href="https://github.com/rawlead"
                                target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github-square"> </i></a></li>

            <li><a style={props.instagramColor} className=" btn-floating"
                                href="https://www.instagram.com/ivanshyrai/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"> </i></a></li>

            <li><a style={props.linkedinColor} className=" btn-floating"
                                href="https://www.linkedin.com/in/ivan-shyrai/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"> </i></a></li>

            <li><a style={props.emailColor} className="btn-floating" href="mailto:ivanshyrai@mail.com"
                                target="_blank" rel="noopener noreferrer">
                <i className="fas fa-envelope"> </i></a></li>
        </ul>
    </div>
);

export default FixedActionButton;