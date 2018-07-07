import React from 'react';
import M from 'materialize-css';

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(elems);
});

const socialColors = {
    facebook: {backgroundColor: '#3b5999'},
    github: {backgroundColor: '#000'},
    instagram: {backgroundColor: '#e4405f'},
    linkedin: {backgroundColor: '#0077B5'},
    email: {backgroundColor: '#000'},
}

const FixedActionButton = () => (
    <div className="fixed-action-btn">
        <a className="btn-floating btn-large">
            <i className="large material-icons">mode_edit</i>
        </a>
        <ul>
            <li><a style={socialColors.facebook} className=" btn-floating"
                                           href="https://www.facebook.com/q0h44" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"> </i></a></li>

            <li><a style={socialColors.github} className="btn-floating black" href="https://github.com/rawlead"
                                target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github-square"> </i></a></li>

            <li><a style={socialColors.instagram} className=" btn-floating"
                                href="https://www.instagram.com/ivanshyrai/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"> </i></a></li>

            <li><a style={socialColors.linkedin} className=" btn-floating"
                                href="https://www.linkedin.com/in/ivan-shyrai/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"> </i></a></li>

            <li><a style={socialColors.email} className="btn-floating" href="mailto:ivanshyrai@mail.com"
                                target="_blank" rel="noopener noreferrer">
                <i className="fas fa-envelope"> </i></a></li>
        </ul>
    </div>
);

export default FixedActionButton;