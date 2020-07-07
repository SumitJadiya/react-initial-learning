import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

const Footer = () => {

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <footer id="footer">
                <div className="container">
                    <div className="copyright">
                        &copy; Copyright <strong><span>STJ</span></strong>
                    </div>
                </div>
            </footer>
            <Link to="hero" onClick={scrollToTop} className="back-to-top"><i className="icofont-simple-up"></i></Link>
        </>
    )
}

export default Footer