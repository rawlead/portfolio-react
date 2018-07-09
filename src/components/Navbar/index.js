import React, {Component} from 'react';
import './Navbar.css';
import {NavLink, Link} from 'react-router-dom';
import M from "materialize-css";

class NavbarSide extends Component {
    componentDidMount() {
        M.Sidenav.init(this.sidenav, {
            closeOnClick: true
        });
    }

    render() {
        return (
            <ul className="sidenav"
                id="sidenav-mobile"
                ref={(sidenav) => {
                    this.sidenav = sidenav
                }}>
                <li><NavLink exact to="/" className="sidenav-close" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/projects" className="sidenav-close" activeClassName="active">Projects</NavLink></li>
                <li><NavLink to="/aboutMe" className="sidenav-close" activeClassName="active">About Me</NavLink></li>
                <li><NavLink to="/resume" className="sidenav-close" activeClassName="active">Resume</NavLink></li>
            </ul>
        )
    }
}


class NavbarTop extends Component {
    componentDidMount() {
        this.styleTopnavOnScroll();
    }

    styleTopnavOnScroll() {
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            var nav = document.getElementById("nav");
            currentScrollPos > nav.clientHeight + 120 ? nav.classList.add("scrolled") : nav.classList.remove("scrolled");
        }
    }

    render() {
        return (
            <div>
                <div className="navbar-fixed">
                    <nav id="nav">
                        <div className="nav-wrapper">
                            <a href="#" data-target="sidenav-mobile" className="sidenav-trigger"><i
                                className="material-icons">menu</i></a>
                            <Link exact to="/" className="brand-logo center">Ivan Shyrai</Link>
                            <ul className="left hide-on-med-and-down">
                                <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                                <li><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
                                <li><NavLink to="/aboutMe" activeClassName="active">About Me</NavLink></li>
                                <li><NavLink to="/resume" activeClassName="active">Resume</NavLink></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <NavbarSide/>
            </div>
        );
    }
}

export default NavbarTop;