import React, {Component} from 'react';
import M from 'materialize-css';
import './Navbar.css';
import {NavLink} from 'react-router-dom';

const NavbarSide = () => (
    <ul className="sidenav" id="mobile-demo">
        <li><a href="/">Home</a></li>
        <li><a href="/">Projects</a></li>
        <li><a href="/aboutMe">About Me</a></li>
    </ul>
);

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
                            <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i
                                className="material-icons">menu</i></a>
                            <a href="/" className="brand-logo center">Ivan Shyrai</a>
                            <ul className="left hide-on-med-and-down">
                                <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                                <li><a href="/">Projects</a></li>
                                <li><NavLink activeClassName="active" onClick={window.location.reload}
                                             to="/aboutMe">About Me</NavLink></li>
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