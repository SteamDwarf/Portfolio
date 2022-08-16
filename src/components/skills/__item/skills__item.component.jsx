import './skills__item.style.scss';
import { getPublicPath } from '../../../utils/data';

const SkillsItem = ({skill}) => {

    return (
        <div className="skills__item">
            <img src={getPublicPath(skill.icon)} alt={skill.name} className="skills__item-icon"/>
            <p className="skills__item-name">{skill.name}</p>
        </div>
    );
    
}

export default SkillsItem;