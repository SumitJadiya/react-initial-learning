import React from 'react';

const Header = () => {
    return (
        <header id="header">
            <div class="d-flex flex-column">

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
                <nav class="nav-menu">
                    <ul>
                        <li class="active"><a href="index.html"><i class="bx bx-home"></i> <span>Home</span></a></li>
                        <li><a href="#about"><i class="bx bx-user"></i> <span>About</span></a></li>
                        <li><a href="#resume"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li>
                        <li><a href="#portfolio"><i class="bx bx-book-content"></i> Portfolio</a></li>
                        <li><a href="#services"><i class="bx bx-server"></i> Services</a></li>
                        <li><a href="#contact"><i class="bx bx-envelope"></i> Contact</a></li>

                    </ul>
                </nav>
                <button type="button" class="mobile-nav-toggle d-xl-none"><i class="icofont-navigation-menu"></i></button>
            </div>
        </header>
    )
}

export default Header
