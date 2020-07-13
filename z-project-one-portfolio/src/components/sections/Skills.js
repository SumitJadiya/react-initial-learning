import React from 'react';
import data from "../data/SKILLS.json"
import TitleBlock from '../blocks/TitleBlock';
import { Container } from 'reactstrap';
import SkillBlock from '../blocks/SkillBlock';

const Skills = () => {

    return (
        <section id="skills" className="skills section-bg">
            <Container>
                <TitleBlock data={data.heading} />
                <SkillBlock data={data.body} />
            </Container>
        </section>
    )
}

export default Skills