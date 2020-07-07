import React, { useState, useEffect } from "react";
import data from "../data/TESTIMONIALS.json"
import TitleBlock from "../blocks/TitleBlock";
import { Container } from "reactstrap"
import TestimonialBlock from "../blocks/TestimonialBlock";

//TODO: Fix the bug - first testimonial is empty
const Testimonials = () => {

    const [testimonial, setTestimonial] = useState([])

    const fetchTestimonials = () => (
        setTestimonial(data.body.data)
    )

    useEffect(() => {
        fetchTestimonials()
    }, [])

    return (
        <section id="testimonials" className="testimonials section-bg">
            <Container>
                <TitleBlock data={data.heading} />
                <TestimonialBlock testimonial={testimonial} />
            </Container>
        </section>
    )
};

export default Testimonials;
