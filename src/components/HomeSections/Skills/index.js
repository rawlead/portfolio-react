import React from 'react';
import './Skills.css';

const Skills = (props) => (
    <div id="skills" className="section scrollspy">
        <div className="container">
            <div className="row">
                <div className="col s12 m11">
                    <h3 className="white-text">Skills</h3>
                    <table className="striped">
                        <tbody>
                        <tr>
                            <td>Programming languages:</td>
                            <td>Java 8, SQL</td>
                        </tr>
                        <tr>
                            <td>Technologies:</td>
                            <td>JavaScript, HTML5, CSS3, jQuery, Vue.js, Bootstrap, XML, REST</td>
                        </tr>
                        <tr>

                            <td>Frameworks</td>
                            <td>Spring Framework (MVC, Data, Security), Hibernate ORM</td>
                        </tr>
                        <tr>
                            <td>Databases:</td>
                            <td>MySQL, PostgreSQL</td>
                        </tr>
                        <tr>
                            <td>Version Control Systems:</td>
                            <td>GIT</td>
                        </tr>
                        <tr>
                            <td>Build tools:</td>
                            <td>Gradle, Maven</td>
                        </tr>
                        <tr>
                            <td>Cloud computing:</td>
                            <td>Amazon AWS (EC2, EB, RDS, S3)</td>
                        </tr>
                        <tr>
                            <td>Tools:</td>
                            <td>IntelliJ IDEA, VSC, Microsoft Office (Word, Excel, PowerPoint)</td>
                        </tr>
                        <tr>
                            <td>Operating systems:</td>
                            <td>macOS, Linux, Windows XP/7/8/10</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <br />
            <img src={props.skillsSectionImgBottom} className="responsive-img night__edge--img" alt="" />
    </div>
);

export default Skills;