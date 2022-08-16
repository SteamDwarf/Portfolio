import './projects__item.style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faFileCode } from '@fortawesome/free-regular-svg-icons';
import { getPublicPath } from '../../../utils/data';
import ButtonLink from '../../button-link/button-link.component';
import { useContext } from 'react';
import { AppContext } from '../../../context/app-context.context';
import ProjectTechnology from '../__technology/projects__technoligy.component';

const ProjectsItem = ({project, onClick}) => {

    return (
        <div className="projects__item" onClick={({target}) => onClick(target, project)}>
            <img src={getPublicPath(project.images[0])} alt={project.title} className="projects__item-img" />
            <div className="projects__item-information">
                <h4 className="projects__item-title">{project.title}</h4>
                <div className="projects__item-technologies">
                    {project.technologies.map(technology => <ProjectTechnology key={technology} technology={technology}/>)}
                </div>
                <div className="projects__item-description">{project.description}</div>
                <div className="projects__item-links-container">
                    <ButtonLink className="projects__item-link" url={project.sourceCode} icon={faFileCode} text="Исходный код"/>
                    <ButtonLink className="projects__item-link" url={project.projectLink} icon={faEye} text="Демо"/>
                </div>
            </div>
        </div>
    );
}

export default ProjectsItem;