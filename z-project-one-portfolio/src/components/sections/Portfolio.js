import React from 'react';
import data from "../data/PORTFOLIO.json"

const Portfolio = () => (
    <section id="portfolio" className="portfolio section-bg">
        <div className="container">

            <div className="section-title">
                <h2>{data.heading.title}</h2>
                <p>{data.heading.description}</p>
            </div>

            <div className="row" data-aos="fade-up">
                <div className="col-lg-12 d-flex justify-content-center">
                    <ul id="portfolio-flters">
                        <li data-filter="*" className="filter-all">All</li>

                        {data.filter.value.map((val, index) => (
                            <li key={index} data-filter={`.filter-${val}`}>{val.id}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

                {data.body.map(val => (
                    <div key={val.index} className={`col-lg-4 col-md-6 portfolio-item filter-${val.type}`}>
                        <div className="portfolio-wrap">
                            <img src={val.source} className="img-fluid" alt="" />
                            <div className="portfolio-links">
                                <a href={val.source} data-gall="portfolioGallery" className="venobox" title={val.title}><i className="bx bx-plus"></i></a>
                                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
)

export default Portfolio