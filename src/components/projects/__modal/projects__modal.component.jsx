import './projects__modal.style.scss';
import { getPublicPath } from '../../../utils/data';
import ProjectTechnology from '../__technology/projects__technoligy.component';
import ButtonLink from '../../button-link/button-link.component';
import { faEye, faFileCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Carousel from '../../carousel/carousel.component';

const ProjectsModal = ({project}) => {

    return (
        <div className="projects__modal">
            <Carousel className="projects__modal-carousel" carouselItems={project.images}/>
            <div className="projects__modal-details">
                <h3 className="projects__modal-title">{project.title}</h3>
                <p className="projects__modal-description">{project.description}</p>
                <div className="projects__modal-technologies">
                    {project.technologies.map(technology => <ProjectTechnology key={technology} technology={technology}/>)}
                </div>
                <div className="projects__modal-links-container">
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

export default ProjectsModal;