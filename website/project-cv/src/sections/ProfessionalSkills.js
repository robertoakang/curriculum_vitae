/* Importing frameworks and libraries */
import React, { Component } from 'react';
import AOS from 'aos';
import { Line, Circle } from 'rc-progress';

/* Importing CSS */
import 'aos/dist/aos.css';

class Skills extends Component {
    render() {        
        AOS.init({
            duration: 1200,
        });

        return (
            <div className="skills-section" id="skills">
                <div className="skills-section-body">
                    <div className="skills-section-title" data-aos="fade-down">
                        <p>SKILLS</p>
                    </div>
                    <div className="skills-section-center">
                        <div className="skills-section-center-info-row">
                            <div className="skills-section-center-info" data-aos="fade">
                                <h4>Linguagens e frameworks</h4>
                                    <p>Javascript <Line percent="80" strokeWidth="1.5" strokeColor="#00308F" /></p>
                                    <p>ReactJS <Line percent="70" strokeWidth="1.5" strokeColor="#00308F" /></p>
                                    <p>React Native <Line percent="70" strokeWidth="1.5" strokeColor="#00308F" /></p>
                                    <p>NodeJS <Line percent="70" strokeWidth="1.5" strokeColor="#00308F" /></p>
                                    <p>.NET/C# <Line percent="50" strokeWidth="1.5" strokeColor="#00308F" /></p>
                                    <p>Java <Line percent="50" strokeWidth="1.5" strokeColor="#00308F" /></p>
                                    <p>PHP <Line percent="60" strokeWidth="1.5" strokeColor="#00308F" /></p>
                                    <p>MySQL <Line percent="80" strokeWidth="1.5" strokeColor="#00308F" /></p>
                                    <p>SQLServer <Line percent="60" strokeWidth="1.5" strokeColor="#00308F" /></p>
                                    <p>Oracle Database <Line percent="60" strokeWidth="1.5" strokeColor="#00308F" /></p>
                            </div>
                            <div className="skills-section-center-info" data-aos="fade">
                                <h4>Ambientes de desenvolvimento</h4>
                                    <p>Visual Studio Code <Line percent="70" strokeWidth="1.5" strokeColor="#00308F" /></p>
                                    <p>NetBeans <Line percent="40" strokeWidth="1.5" strokeColor="#00308F" /></p>
                                    <p>Android Studio <Line percent="50" strokeWidth="1.5" strokeColor="#00308F" /></p>
                                    <p>MySQL Workbench <Line percent="70" strokeWidth="1.5" strokeColor="#00308F" /></p>
                                    <p>XAMPP <Line percent="60" strokeWidth="1.5" strokeColor="#00308F" /></p>
                                <h4>Línguas</h4>
                                    <div className="skills-section-center-languages-row">
                                        <p className="skills-section-center-languages">Português <br/>
                                            <Circle percent="100" strokeWidth="10" strokeColor="#00308F" className="skills-section-center-circle-progress" trailWidth="5"/>
                                        </p>
                                        <p className="skills-section-center-languages">Inglês <br/>
                                            <Circle percent="60" strokeWidth="10" strokeColor="#00308F" className="skills-section-center-circle-progress" trailWidth="5"/>
                                        </p>                                        
                                        <p className="skills-section-center-languages">Espanhol <br/>
                                            <Circle percent="40" strokeWidth="10" strokeColor="#00308F" className="skills-section-center-circle-progress" trailWidth="5"/>
                                        </p>                                        
                                    </div>
                            </div>
                        </div>
  {/* <Line percent="10" strokeWidth="4" strokeColor="#D3D3D3" />
  <Circle percent="10" strokeWidth="4" strokeColor="#D3D3D3" /> */}
                    </div>
                </div>
            </div>
        )
    }
};

export default Skills;