import React, { Component } from 'react';

import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'

class Home extends Component {
    render() {
        return (
            <div className="home-section" id="home">
                <div className="home-section-body">
                    <div className="home-section-header"></div>
                    <div className="home-section-center">
                        <div className="home-section-center-photo" />
                        <div className="home-section-center-info">
                            <div className="home-section-center-info-text">
                                <p style={{fontFamily: "'Forum', cursive", fontWeight: "bold", letterSpacing: "1px"}}>Roberto Arruda Kang</p>
                                <p style={{fontSize: "0.8em", marginTop: "5px", letterSpacing: "1.5px"}}>DESENVOLVEDOR FRONT-END/FULLSTACK</p>

                                <p style={{fontSize: "0.7em", marginTop: "25px", fontWeight: "bold"}}>Formação:</p>
                                <p style={{fontSize: "0.7em", marginTop: "5px", fontWeight: "500"}}>• Curso de Web Developer - Microcamp/Evolutime (2015-2017)</p>
                                <p style={{fontSize: "0.7em", marginTop: "5px", fontWeight: "500"}}>• Curso Superior de S.I - UNIP (2017/1)</p>

                                <p style={{fontSize: "0.7em", marginTop: "15px", fontWeight: "bold"}}>Tecnologias preferidas:</p>
                                <p style={{fontSize: "0.7em", marginTop: "5px", fontWeight: "500"}}>React, React Native e NodeJS</p>

                                <p style={{fontSize: "0.7em", marginTop: "15px", fontWeight: "bold"}}>Email:</p>
                                <p style={{fontSize: "0.7em", marginTop: "5px", fontWeight: "500"}}>betoakang@gmail.com</p>

                                <p style={{fontSize: "0.7em", marginTop: "15px", fontWeight: "bold"}}>Data de nascimento:</p>
                                <p style={{fontSize: "0.7em", marginTop: "5px", fontWeight: "500"}}>01/06/2000</p>
                            </div>
                        </div>
                        <div className="home-section-center-footer">
                            <p><a href="https://www.linkedin.com/in/roberto-arruda-kang-8145a7186/" target="_blank"><img src={linkedin} class="home-section-center-socials"/></a></p>
                            <p><a href="https://github.com/robertoakang" target="_blank"><img src={github} class="home-section-center-socials" /></a></p>
                            <p><a href="https://github.com/robertoakang" target="_blank"><img src={facebook} class="home-section-center-socials" /></a></p>
                            <p><a href="https://github.com/robertoakang" target="_blank"><img src={instagram} class="home-section-center-socials" /></a></p>
                        </div>
                    </div>
                    <div className="home-section-footer">
                        <h2>Um pouco sobre mim</h2>
                        <p style={{marginTop: "10px"}}>Apaixonado por tecnologia e todo seu ecossistema.</p>
                        <p>Nascido no meio desta revolução tecnológica, aprendi a amar e usar a tecnologia ao meu favor, seja </p>
                        <p>ela automatizando processos ou facilitando a vida das pessoas. A tecnologia é a vida atual do ser humano!</p>
                    </div>
                </div>
            </div>
        )
    }
};

export default Home;
