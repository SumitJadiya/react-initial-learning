import React from 'react';
import data from "../data/RESUME.json"
import TitleBlock from '../blocks/TitleBlock';
import ResumeBlock from '../blocks/ResumeBlock';

const Resume = () => (
    <section id="resume" className="resume">
        <div className="container">
            <TitleBlock data={data.heading} />

            <div className="row">
                <div className="col-lg-6" data-aos="fade-up">
                    <h3 className="resume-title">{data.summary.title}</h3>
                    <div className="resume-item pb-0">
                        <h4>{data.summary.details.name}</h4>
                        <p><em>{data.summary.details.description}</em></p>
                        <ul>
                            {data.summary.details.address.map((val, index) => (
                                <li key={index}>{val}</li>
                            ))}
                        </ul>
                    </div>


                    <ResumeBlock data={data.body} flag={true} />
                </div>
                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

                    <ResumeBlock data={data.career} flag={false} />
                </div>
            </div>
        </div>
    </section>
)

export default Resume