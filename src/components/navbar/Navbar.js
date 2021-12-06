import React, { useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import LogoIcon from '../Icons/LogoIcon';
import AboutIcon from '../Icons/AboutIcon';
import ProjectsIcon from '../Icons/ProjectsIcon';
import ContactIcon from '../Icons/ContactIcon';
import { Squash as Hamburger } from 'hamburger-react';

import './Navbar.css';

function NavBar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -60; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    return (
        <>
            <nav className="navbar">

            <a href="/Will_Locket" className="logo">
                    <LogoIcon/>
                </a>

                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link
                            
                            to="/#"
                            className="nav-links"
                            onClick={handleClick}

                        >
                            <LogoIcon/>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            
                            to="/#about"
                            className="nav-links"
                            onClick={handleClick}
                            scroll={el => scrollWithOffset(el)}
                        >
                            <AboutIcon/>
                            About
                           
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            
                            to="/#projects"
                            className="nav-links"
                            onClick={handleClick}
                            scroll={el => scrollWithOffset(el)}
                        >
                           <ProjectsIcon/>
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            
                            to="/contact"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            <ContactIcon/>
                            Contact
                        </Link>
                    </li>
                </ul>
                <div className="nav-icon" onClick={handleClick}>
                    <Hamburger onClick={handleClick} size={20} color="#212529" label="Show menu" toggled={click} toggle={setClick} />
                </div>

            </nav>
        </>
    );
}

export default NavBar;