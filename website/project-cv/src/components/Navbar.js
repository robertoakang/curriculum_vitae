import React, { Component } from 'react';
import { Link } from 'react-scroll';

class Navbar extends Component {
    state = {};

    render() {
        return (
            <div className="navbar">
                <ul>  
                    <li>
                        <Link
                        activeClass='active'
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={400}
                        >INÍCIO</Link>
                    </li>
                    <li>
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
                        >TESTE!</Link>
                    </li>
                    <li>
                        <Link
                        activeClass='active'
                        to="curriculum"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={400}
                        >TESTE</Link>
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