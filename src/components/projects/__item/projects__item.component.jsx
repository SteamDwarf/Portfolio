import './projects__item.style.scss';
import { faEye, faFileCode } from '@fortawesome/free-regular-svg-icons';
import { getPublicPath } from '../../../utils/data';
import ButtonLink from '../../button-link/button-link.component';
import ProjectTechnology from '../__technology/projects__technoligy.component';

const ProjectsItem = ({project, onClick, changeFilter}) => {

    return (
        <div className="projects__item" onClick={({target}) => onClick(target, project)}>
            <img 
                src={getPublicPath(project.images[0])} 
                alt={project.title} 
                className="projects__item-img" 
            />
            <div className="projects__item-information">
                <div className="projects__item-information-header">
                    <h4 className="projects__item-title">{project.title}</h4>
                    <div className="projects__item-technologies">
                        {project.technologies.map(technology =>
                            <ProjectTechnology 
                                key={technology} 
                                technology={technology}
                                onClick={() => changeFilter(technology)}
                            />
                        )}
                    </div>
                </div>
                <div className="projects__item-description">{project.description}</div>
                <div className="projects__item-links-container">
                    {
                        project.sourceCode 
                        ? <ButtonLink className="projects__item-link" url={project.sourceCode} icon={faFileCode} text="Исходный код"/>
                        : null
                    }
                    {
                        project.projectLink
                        ? <ButtonLink className="projects__item-link" url={project.projectLink} icon={faEye} text="Демо"/>
                        : null
                    }
                </div>
            </div>
        </div>
    );
}

export default ProjectsItem;