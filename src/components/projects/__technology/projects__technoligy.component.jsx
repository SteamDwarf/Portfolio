import './projects__technology.style.scss';

const ProjectTechnology = ({technology, onClick}) => {
    return (
        <span className="projects__technology" onClick={onClick}>{technology} </span>
    );
}

export default ProjectTechnology;