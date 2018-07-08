import React from 'react';
import './Skills.css';

const Skills = (props) => (
    <div>
    <div id="skills" className="section scrollspy">
        <div className="container">
            <div className="row">
                <div className="col s12 m11">
                    <h3 className="white-text">Skills</h3>
                    <table className="striped">
                        <tbody>
                        <tr data-aos="fade-right">
                            <td>Programming languages:</td>
                            <td>Java 8 / SQL</td>
                        </tr>
                        <tr data-aos="fade-right">
                            <td>Technologies:</td>
                            <td>JavaScript / HTML5 / CSS3 / jQuery / Vue.js / Bootstrap / REST / ReactJS</td>
                        </tr>
                        <tr data-aos="fade-right">

                            <td>Frameworks</td>
                            <td>Spring Framework (MVC, Data, Security) / Hibernate ORM</td>
                        </tr>
                        <tr data-aos="fade-right">
                            <td>Databases:</td>
                            <td>MySQL / PostgreSQL</td>
                        </tr>
                        <tr data-aos="fade-right">
                            <td>Version Control Systems:</td>
                            <td>GIT</td>
                        </tr>
                        <tr data-aos="fade-right">
                            <td>Build tools:</td>
                            <td>Gradle / Maven</td>
                        </tr>
                        <tr data-aos="fade-right">
                            <td>Cloud computing:</td>
                            <td>Amazon AWS (EC2, EB, RDS, S3)</td>
                        </tr>
                        <tr data-aos="fade-right">
                            <td>Tools:</td>
                            <td>IntelliJ IDEA / VSC / Microsoft Office (Word, Excel, PowerPoint)</td>
                        </tr>
                        <tr data-aos="fade-right">
                            <td>Operating systems:</td>
                            <td>macOS / Linux / Windows</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <br />
    </div>
        <img src={props.skillsSectionImgBottom} className="responsive-img night__edge--img"  alt="" />

    </div>
);

export default Skills;