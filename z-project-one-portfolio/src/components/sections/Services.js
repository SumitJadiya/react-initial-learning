import React, { useState, useEffect } from 'react';
import data from "../data/SERVICES.json"
import ServiceBlock from '../blocks/ServiceBlock';
import TitleBlock from '../blocks/TitleBlock';
import { Container } from "reactstrap"

const Services = () => {
    const [service, setService] = useState([])

    const fetchService = () => {
        setService(data.body.data)
    }

    useEffect(() => {
        fetchService()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <section id="services" className="services">
            <Container>
                <TitleBlock data={data.heading} />
                <ServiceBlock service={service} />
            </Container>
        </section>
    )
}

export default Services