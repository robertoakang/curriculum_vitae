import React, { Component } from 'react';
import { Link } from 'react-scroll';

// $(document).on("scroll",function(){
//     if($(document).scrollTop()>100){ //QUANDO O SCROLL PASSAR DOS 100px DO TOPO
//         $("header").removeClass("large").addClass("small"); //TROCA P CLASSE MENOR
//     } else{
//         $("header").removeClass("small").addClass("large"); //VOLTA P MENU GRANDE ORIGINAL
//     }
// });

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <ul>  
                    <li className="page-title">                        
                        <Link
                        to="home"
                        spy={false}
                        smooth={true}
                        offset={0}
                        duration={400}
                        >ROBERTO ARRUDA KANG</Link>
                    </li>
                    <li className="teste">
                        <Link
                        activeClass='active'
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={400}
                        >INÍCIO</Link>
                    </li>
                    <li className="teste">
                        <Link
                        activeClass='active'
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={400}
                        >SKILLS</Link>
                    </li>
                    <li>
                        <Link
                        activeClass='active'
                        to="exp"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={400}
                        >EXPERIÊNCIA</Link>
                    </li>
                    <li>
                        <Link
                        activeClass='active'
                        to="curriculum"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={400}
                        >CURRÍCULO</Link>
                    </li>
                    <li>
                        <Link
                        activeClass='active'
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={400}
                        >CONTATO</Link>
                    </li>
                </ul>
            </div>
        )
    }
};

export default Navbar;