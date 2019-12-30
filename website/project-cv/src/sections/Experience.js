/* Importing frameworks and libraries */
import React, { Component } from 'react';
import AOS from 'aos';

/* Importing CSS */
import 'aos/dist/aos.css';

class Experience extends Component {
    render() {
        AOS.init({
        duration: 1200,
        });

        return (
            <div className="exp-section" id="exp">
                <div className="skills-section-body">                
                    <div className="exp-section-title" data-aos="fade-down">
                        <p>EXPERIÊNCIA</p>
                    </div>
                    <div className="exp-section-center">
                        <div className="exp-section-center-row">
                            <div className="exp-section-center-info">
                                <div className="exp-section-center-info-year" data-aos="fade">
                                    <label>2015</label>                                    
                                </div>
                                <div className="exp-section-center-info-text" data-aos="fade-right">
                                    <p className="exp-section-center-info-text-company">Centro Educacional Kang LTDA. - JAN a DEZ</p>
                                    <p className="exp-section-center-info-text-position">Estágio em informática</p>
                                    <p className="exp-section-center-info-text-jobDesc">Help desk, redes básica, configuração de computadores, Windows, hardware básico.</p>
                                </div>
                                <div className="exp-section-center-info-year" data-aos="fade">
                                    <label>2017</label>                                    
                                </div>
                                <div className="exp-section-center-info-text" data-aos="fade-right">
                                    <p className="exp-section-center-info-text-company">Fórum da Comarca de Praia Grande/SP</p>
                                    <p className="exp-section-center-info-text-position">Estágio</p>
                                    <p className="exp-section-center-info-text-jobDesc">Acompanhamento em audiências, criação, organização e manutenção de processos judicais, elaboração de planilhas, documentos e apresentações.</p>
                                </div>
                            </div>
                            <div className="exp-section-center-info">   
                                <div className="exp-section-center-info-year" data-aos="fade">
                                    <label>2018</label>                                    
                                </div>
                                <div className="exp-section-center-info-text" data-aos="fade-right">
                                    <p className="exp-section-center-info-text-company">Peg Pese Hortifruti - NOV a OUT/2019</p>
                                    <p className="exp-section-center-info-text-position">Estágio em T.I</p>
                                    <p className="exp-section-center-info-text-jobDesc">Help desk, redes básica, desenvolvimento de aplicações web e mobile com as linguagens Javascript, PHP, Java, C#, MySQL, SQLServer, entre outras.</p>
                                </div>
                                <div className="exp-section-center-info-year" data-aos="fade">
                                    <label>2019</label>                                    
                                </div>
                                <div className="exp-section-center-info-text" data-aos="fade-right">
                                    <p className="exp-section-center-info-text-company">Peg Pese Hortifruti - OUT</p>
                                    <p className="exp-section-center-info-text-position">Programador Júnior</p>
                                    <p className="exp-section-center-info-text-jobDesc">Desenvolvimento de aplicações web e mobile com as linguagens Javascript, PHP, Java, C#, entre outras. Criação de estrutura e manutenção de banco de dados MySQL.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Experience;