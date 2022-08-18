import './projects.style.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchData, getPublicPath } from '../../utils/data';
import ProjectsItem from './__item/projects__item.component';
import ProjectsModal from './__modal/projects__modal.component';
import { useContext } from 'react';
import { AppContext } from '../../context/app-context.context';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [isShowMore, setIsShowMore] = useState(false);
    const {setModalContent, setIsModalOpen} = useContext(AppContext);
    const projectsContainer = useRef();

    const showProject = (target, project) => {
        if(!target.classList.contains('projects__technology') && !target.classList.contains('projects__item-link')) {
            setModalContent(<ProjectsModal project={project}/>);
            setIsModalOpen(true);
        }
    }

    const showMoreOnClick = () => {
        setIsShowMore(!isShowMore);
    }

    useEffect(() => {
        fetchData('projects.json', setProjects);
    }, []);


    return (
        <section className="projects" id="projects">
            <h2 className="projects__title">Проекты</h2>
            <input 
                type="checkbox" 
                checked={isShowMore} 
                onChange={showMoreOnClick} 
                id="showMoreCheckbox"
                className="projects__show-more-checkbox"
            />
            <div className="projects__container-cover">    
                <label
                    className="projects__show-more" 
                    htmlFor="showMoreCheckbox"
                >
                    <p className="projects__show-more-text">{isShowMore ? 'Свернуть' : 'Показать больше'}</p>
                    <FontAwesomeIcon icon={faAnglesDown}/>
                </label>
            </div>
            <div 
                ref={projectsContainer} 
                className="projects__container"
                style={isShowMore ? {height: projectsContainer.current.scrollHeight} : {height: '600px'}}
            >
                {projects.map(project => <ProjectsItem key={project.title} project={project} onClick={showProject}/> )}
            </div>
        </section>
    )
}

export default Projects;