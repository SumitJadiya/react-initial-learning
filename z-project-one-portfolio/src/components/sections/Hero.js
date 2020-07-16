import React from 'react';
import Typed from 'react-typed';
import data from "../data/HERO.json"

const Hero = () => {

    return (
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
            <div className="hero-container" data-aos="fade-in">
                <h1>{data.name}</h1>
                <br />

                <p>I'm &nbsp;
                    <Typed className="typed"
                        strings={data.details}
                        backDelay={2000}
                        typeSpeed={100}
                        backSpeed={50}
                        showCursor
                        shuffle
                        loop >
                    </Typed>
                </p>
            </div>
        </section>
    )
}

export default Hero