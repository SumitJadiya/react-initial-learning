import React from 'react';
import Nav from './nav';

const Header = () => {
    return (
        <header id="header">
            <div className="d-flex flex-column">

                <div className="d-flex flex-column">
                    <div className="profile">
                        <img src={'assets/img/profile-img.jpg'} alt="" className="img-fluid rounded-circle" />
                        <h1 className="text-light"><a href="index.html">Alex Smith</a></h1>
                        <div className="social-links mt-3 text-center">
                            <a href="#s" className="twitter"><i className="bx bxl-twitter"></i></a>
                            <a href="#a" className="facebook"><i className="bx bxl-facebook"></i></a>
                            <a href="#s" className="instagram"><i className="bx bxl-instagram"></i></a>
                            <a href="#d" className="google-plus"><i className="bx bxl-skype"></i></a>
                            <a href="#f" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                        </div>
                    </div>
                </div>
                <Nav />
            </div>
        </header>
    )
}

export default Header
