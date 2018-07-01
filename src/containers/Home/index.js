import React, {Component} from 'react';

import parallaxImg from '../../assets/night.png';
import parallaxImg2__balloon from '../../assets/balloon.png';
import parallaxImg2__bottom from '../../assets/night-bottom.png';
import skillsSecImg__bottom from '../../assets/night-edge.jpg';

import project_img_1 from '../../assets/portalis.jpg';
import project_img_2 from '../../assets/filterapp.jpg';
import project_img_3 from '../../assets/santravels.jpg';
import footer_img from '../../assets/ny.png';

import Navbar from '../../components/Navbar';
import ParallaxSec from '../../components/HomeSections/ParallaxSec';
import Introduction from '../../components/HomeSections/Introduction';
import Education from '../../components/HomeSections/Education';
import Skills from '../../components/HomeSections/Skills';
import FeaturedProjects from '../../components/HomeSections/FeaturedProjects'
import FactsSec from '../../components/HomeSections/FactsSec';
import InfoSec from '../../components/HomeSections/InfoSec';
import Footer from '../../components/Footer';

import Scrollspy from '../../components/Scrollspy';
import FixedActionButton from '../../components/FixedActionButton';

const socialColors = {
    "facebook": {backgroundColor: '#3b5999'},
    "github": {backgroundColor: '#000'},
    "instagram": {backgroundColor: '#e4405f'},
    "linkedin": {backgroundColor: '#0077B5'},
    "email": {backgroundColor: '#000'},
};

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar/>

                <ParallaxSec
                    parallaxImgUrl={parallaxImg}
                />

                <Scrollspy/>

                <Introduction/>

                <Education
                    parallaxImg={parallaxImg}
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

                <FactsSec/>

                <InfoSec/>

                <FixedActionButton
                    facebookColor={socialColors.facebook}
                    githubColor={socialColors.github}
                    instagramColor={socialColors.instagram}
                    linkedinColor={socialColors.linkedin}
                    emailColor={socialColors.email}
                />

                <Footer
                    facebookColor={socialColors.facebook}
                    githubColor={socialColors.github}
                    instagramColor={socialColors.instagram}
                    linkedinColor={socialColors.linkedin}
                    emailColor={socialColors.email}
                >
                    <img src={footer_img} className="img__before__footer" alt="Footer"/>
                </Footer>
            </div>
        );
    }
}

export default Home;