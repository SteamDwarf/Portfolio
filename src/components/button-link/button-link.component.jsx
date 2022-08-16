import './button-link.style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ButtonLink = ({ className, url, icon, text }) => {
    return (
        <a href={url} target="_blank" className={`button-link ${className}`}>
            <FontAwesomeIcon icon={icon}/> {text}
        </a>
    );
}

export default ButtonLink;