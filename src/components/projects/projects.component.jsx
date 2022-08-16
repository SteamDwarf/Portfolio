import './projects.style.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchData, getPublicPath } from '../../utils/data';
import ProjectsItem from './__item/projects__item.component';
import ProjectsModal from './__modal/projects__modal.component';
import { useContext } from 'react';
import { AppContext } from '../../context/app-context.context';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const {setModalContent, setIsModalOpen} = useContext(AppContext);

    const showProject = (target, project) => {
        if(!target.classList.contains('projects__technology') && !target.classList.contains('projects__item-link')) {
            setModalContent(<ProjectsModal project={project}/>);
            setIsModalOpen(true);
        }
    }

    useEffect(() => {
        fetchData('projects.json', setProjects);
    }, []);

    return (
        <section className="projects" id="projects">
            <h2 className="projects__title">Проекты</h2>
            <div className="projects__container">
                {projects.map(project => <ProjectsItem key={project.title} project={project} onClick={showProject}/> )}
            </div>
        </section>
    )
}

export default Projects;