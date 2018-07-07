import React from 'react';
import './Education.css';

const Education = (props) => (


    <div id="education" className="section scrollspy parallax-container parallax__container__bottom">
        <div className="parallax parallax__bottom">
            <img src={ props.parallaxImg} alt="Night"/>
        </div>
        <div className="container">
            <div className="row">
                <div className="col s12 l5 hide-on-med-and-down ">
                    <img src={props.parallaxImgBalloon} className="education-img" alt="Balloon"/>
                </div>
                <div className="col s12 l5 offset-l1 caption parallax-caption">
                    <h3>Education</h3>
                    <blockquote>2014 - 2018</blockquote>
                    <h6 className="bold">University of Social Sciences</h6>
                    <h6>Warsaw, Poland</h6>
                    <p>Bachelor of science in Computer Science</p>
                    <br />
                        <div className="divider"> </div>
                        <br />
                            <blockquote>2010 - 2014</blockquote>
                            <h6 className="bold">Machine Building College</h6>
                            <h6>Sumy, Ukraine</h6>
                            <p>Associate of Science in Chemical and Oil Engineering</p>
                </div>

            </div>
        </div>
        <img src={props.parallaxImgBottom} className="night-bottom" alt=""/>
    </div>
);

export default Education;