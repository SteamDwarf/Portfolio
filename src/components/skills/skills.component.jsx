import './skills.style.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import { fetchData } from '../../utils/data';
import SkillsItem from './__item/skills__item.component';

const Skills = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetchData('skills.json', setSkills)
    }, []);

    return (
        <section className="skills" id="skills">
            <h2 className="skills__title">Навыки</h2>
            <div className="skills__container">
                {skills.map(skill => <SkillsItem key={skill.name} skill={skill}/>)}
            </div>
        </section>
    );
}

export default Skills;