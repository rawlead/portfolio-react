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


class Home extends Component {
    componentDidMount() {

    }
    render() {
        return (
            <div>
                {/*<Navbar/>*/}

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

                <FactsSec/>

                <InfoSec/>

                <FixedActionButton/>

                <Footer>
                    <img src={footer_img} className="img__before__footer" alt="Footer"/>
                </Footer>
            </div>
        );
    }
}

export default Home;