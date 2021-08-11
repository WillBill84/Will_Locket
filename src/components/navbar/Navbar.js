import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from '../../assets/images/w.svg';
import { Squash as Hamburger } from 'hamburger-react'
import './Navbar.css';


function NavBar() {


    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);


    return (
        <>
            <nav className="navbar">

                <NavLink exact to="/" className="logo">
                    <img src={Logo} alt="Will Locket" />
                </NavLink>

                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}

                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/about"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/projects"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            Projects
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/contact"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <a href="#" className="nav-icon" onClick={handleClick}>
                    <Hamburger onClick={handleClick} color="#50514f" label="Show menu" toggled={click} toggle={setClick} />
                </a>

            </nav>
        </>
    );
}

export default NavBar;