import React, {Component} from 'react';

import parallaxImg1 from '../../assets/parallax-night-1.png';
import parallaxImg2 from '../../assets/parallax-night-2.png';

import parallaxImg2__balloon from '../../assets/balloon.png';
import parallaxImg2__bottom from '../../assets/night-bottom.png';
import skillsSecImg__bottom from '../../assets/night-edge.png';

import project_img_1 from '../../assets/project-1-blur.jpg';
import project_img_2 from '../../assets/project-2-blur.jpg';
import project_img_3 from '../../assets/project-3-blur.jpg';
import footer_img from '../../assets/ny.png';

import ParallaxSec from '../../components/HomeSections/ParallaxSec';
import Introduction from '../../components/HomeSections/Introduction';
import Education from '../../components/HomeSections/Education';
import Skills from '../../components/HomeSections/Skills';
import FeaturedProjects from '../../components/HomeSections/FeaturedProjects'
import Facts from '../../components/HomeSections/Facts';
import Info from '../../components/HomeSections/Info';
import Footer from '../../components/Footer';

import Scrollspy from '../../components/Scrollspy';
import FixedActionButton from '../../components/FixedActionButton';
import M from "materialize-css";


class AboutMe extends Component {
    componentDidMount() {
        // Materialize components initialization
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elems);
        });
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.slider');
            M.Slider.init(elems, {'duration': 0});
        });
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.parallax');
            M.Parallax.init(elems);
        });
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.scrollspy');
            M.ScrollSpy.init(elems);
        });
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.fixed-action-btn');
            M.FloatingActionButton.init(elems);
        });
    }
    render() {
        return (
            <div>
                <ParallaxSec
                    parallaxImgUrl={parallaxImg1}
                />

                <Scrollspy/>

                <Introduction/>

                <Education
                    parallaxImg={parallaxImg2}
                    parallaxImgBalloon={parallaxImg2__balloon}
                    parallaxImgBottom={parallaxImg2__bottom}
                />

                <Skills
                    skillsSectionImgBottom={skillsSecImg__bottom}
                />

                <FeaturedProjects
                    featuredImg1={project_img_1}
                    featuredImg2={project_img_2}
                    featuredImg3={project_img_3}
                />

                <Facts/>

                <Info/>

                <FixedActionButton/>

                <Footer>
                    <img src={footer_img} className="img__before__footer" alt="Footer"/>
                </Footer>
            </div>
        );
    }
}

export default AboutMe;