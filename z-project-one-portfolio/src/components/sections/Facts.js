import React, { useState, useEffect } from 'react';
import data from "../data/FACTS.json"

const Facts = () => {

    const [body, setBody] = useState([])

    useEffect(() => {
        setBody(data.body)
    }, [])

    return (
        <section id="facts" className="facts">
            <div className="container">

                <div className="section-title">
                    <h2>{data.heading.title}</h2>
                    <p>{data.heading.description}</p>
                </div>

                <div className="row no-gutters">
                    {body.map(content => (
                        <div key={content.index} className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
                            <div className="count-box">
                                <i className={content.icon}></i>
                                <span data-toggle="counter-up">{content.count}</span>
                                <p><strong>{content.shortDescription}</strong> {content.detail}</p>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    )
}

export default Facts