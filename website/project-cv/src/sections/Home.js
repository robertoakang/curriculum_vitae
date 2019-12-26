import React, { Component } from 'react';

class Home extends Component {

    x = "{";
    y = "}";

    render() {
        return (
            <div className="home-section" id="home">
                <div className="home-section-body">
                    <div className="photo-background"></div>
                    <div className="div-titles">
                        <p className="title-name">Roberto Arruda Kang</p>
                        <div className="title-about">
                            <div className="brackets"><span>{this.x} </span></div>
                            <div className="brackets-content">Desenvolvedor front-end/fullstack apaixonado por tecnologia e desafios.
                                Estudando e trabalhando atualmente com ReactJS, NodeJS e React Native</div>
                            <div className="brackets"><span>{this.y}</span></div>
                        </div>
                    </div>                    
                    <div className="buttons">
                        <div> Saiba mais </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Home;
