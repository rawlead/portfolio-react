import React, {Component} from 'react';
import './Scrollspy.css';
import M from "materialize-css";

class Scrollspy extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            M.ScrollSpy.init(this.scrollSpy);
        });

    }

    render() {
        return (
            <div className="hide-on-med-and-down sticky right bottom-sheet spy reverse-colors"

                 id="scroll-spy">
                <ul className="section table-of-contents ">
                    <li><a id="introduction-scrollspy" href="#introduction">Intro</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#featured_projects_wrapper">Featured</a></li>
                    <li><a href="#facts">Facts</a></li>
                    <li><a href="#info">Info</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        )
    }
}

export default Scrollspy;
