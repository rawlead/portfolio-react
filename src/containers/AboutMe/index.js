import React, {Component} from 'react';

import skillsSecImg__bottom from '../../assets/night-edge.png';

import project_img_1 from '../../assets/project-1-blur.jpg';
import project_img_2 from '../../assets/project-2-blur.jpg';
import project_img_3 from '../../assets/project-3-blur.jpg';
import footer_img from '../../assets/ny.png';

import Header from '../../components/HomeSections/Header';
import Introduction from '../../components/HomeSections/Introduction';
import Education from '../../components/HomeSections/Education';
import Skills from '../../components/HomeSections/Skills';
import FeaturedProjects from '../../components/HomeSections/FeaturedProjects'
import Facts from '../../components/HomeSections/Facts';
import Info from '../../components/HomeSections/Info';
import Footer from '../../components/Footer';

import Scrollspy from '../../components/Scrollspy';

import 'materialize-css/dist/css/materialize.min.css';
import AOS from "aos";


class AboutMe extends Component {
    componentDidMount() {
        AOS.init(this.aos);
    }

    render() {
        return (
            // aos - animate on scroll library
            <div ref={(aos) => {
                this.aos = aos
            }}>
                <Header/>

                <Scrollspy/>

                <Introduction/>

                <Education/>

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

                <Footer>
                    <img src={footer_img} className="img__before__footer" alt="Footer"/>
                </Footer>
            </div>
        );
    }
}

export default AboutMe;