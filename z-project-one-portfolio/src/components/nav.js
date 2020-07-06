import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

const Nav = () => {

    /* scrollToTop = () => {
        scroll.scrollToTop();
    }; */

    return (
        <>
            <nav className="nav-menu">
                <ul>
                    <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="hero"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <i className="bx bx-home"></i>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <i className="bx bx-user"></i>
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="resume"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <i className="bx bx-file-blank"></i>
                            Resume
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="portfolio"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <i className="bx bx-book-content"></i>
                            Portfolio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="services"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <i className="bx bx-server"></i>
                            Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <i className="bx bx-envelope"></i>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
            <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>
        </>
    )
}

export default Nav