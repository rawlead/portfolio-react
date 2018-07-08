import React, {Component} from 'react';
import M from 'materialize-css';
import './Navbar.css';
import {NavLink} from 'react-router-dom';



document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
});


document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, {'duration': 0});
});
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems);
});




const NavbarSide = () => (
    <ul className="sidenav" id="mobile-demo">
        <li><a href="/">Home</a></li>
        <li><a href="/">Projects</a></li>
        <li><a href="/">Dev</a></li>
        <li><a href="/">More</a></li>
    </ul>
);

class NavbarTop extends Component {
    componentDidMount() {
        this.styleTopnavOnScroll();


        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.parallax');
            M.Parallax.init(elems);
        });

    }


    styleTopnavOnScroll() {
        // var intro_scrollspy = document.getElementById("introduction-scrollspy");
        // var scrollspy_section = document.getElementById("scroll-spy");
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            var nav = document.getElementById("nav");
            if (currentScrollPos > nav.clientHeight + 120) {
                nav.classList.add("scrolled");
            } else {
                nav.classList.remove("scrolled");
            }


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
                                <li><NavLink activeClassName="active" onClick={window.location.reload} to="/overview">Overview</NavLink></li>
                                <li><a href="/">Dev</a></li>
                                <li><a href="/">More</a></li>
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