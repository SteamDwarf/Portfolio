import './projects.style.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import ProjectsItem from './__item/projects__item.component';
import ProjectsModal from './__modal/projects__modal.component';
import { useContext } from 'react';
import { AppContext } from '../../context/app-context.context';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import FilterSelect from './__filter-select/projects__filter-select.component';
import useWindowDimension from '../../utils/hooks/useWindowDemension';

const Projects = () => {
    const {projects, projectsTechnologies} = useContext(AppContext);
    const [filteredProjects, setFilteredProjects] = useState(projects);
    const [isShowMore, setIsShowMore] = useState(false);
    const [filter, setFilter] = useState('');
    const {width} = useWindowDimension()
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

    const filteringProjects = () => {
        if(filter) {
            setFilteredProjects(projects.filter(project => project.technologies.includes(filter)));
            return;
        }

        setFilteredProjects(projects);
    }

    const changeFilter = (newFilter) => {
        setFilter(newFilter);
        setIsShowMore(false);
    }

    const getContainerHeight = () => {
        const rolledUpHeight = width > 806 ? '600px' : filteredProjects.length >= 2 ? '1140px' : '600px';
        const containerHeight = isShowMore ? projectsContainer.current.scrollHeight : rolledUpHeight;

        return containerHeight;
    }

    useEffect(() => {
        filteringProjects();
    }, [filter, projects]);

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
            {
                filteredProjects.length > 2 
                ? (
                    <div className="projects__container-cover">    
                        <label className="projects__show-more" htmlFor="showMoreCheckbox">
                            <p className="projects__show-more-text">{isShowMore ? 'Свернуть' : 'Показать больше'}</p>
                            <FontAwesomeIcon icon={faAnglesDown}/>
                        </label>
                    </div>
                )
                : null
            }
            
            <FilterSelect curFilter={filter} filters={projectsTechnologies} changeFilter={changeFilter} />
            <div 
                ref={projectsContainer} 
                className="projects__container"
                style={{height: getContainerHeight()}}
            >
                {filteredProjects.map(project =>
                    <ProjectsItem 
                        key={project.title} 
                        project={project} 
                        onClick={showProject}
                        changeFilter={changeFilter}
                    /> 
                )}
            </div>
        </section>
    )
}

export default Projects;