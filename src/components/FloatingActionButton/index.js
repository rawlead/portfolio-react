import React, {Component} from 'react';
import M from 'materialize-css';

const socialColors = {
    facebook: {backgroundColor: '#3b5999'},
    github: {backgroundColor: '#000'},
    instagram: {backgroundColor: '#e4405f'},
    linkedin: {backgroundColor: '#0077B5'},
    email: {backgroundColor: '#000'},
};

class FloatingActionButton extends Component {
    componentDidMount() {
        M.FloatingActionButton.init(this.fab);
    }

    render() {
        return (
            <div className="fixed-action-btn"
                 ref={(fab) => {
                this.fab = fab
            }}>
                <a className="btn-floating btn-large">
                    <i className="fas fa-address-card"> </i>
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
        )
    }
}

export default FloatingActionButton;