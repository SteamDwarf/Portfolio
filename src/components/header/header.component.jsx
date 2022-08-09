import './header.style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo-container">
                <FontAwesomeIcon icon={faCode} className="header__logo"/>
            </div>
            <nav className="header__nav">
                <span className="header__nav-item">Обо мне</span>
                <span className="header__nav-item">Навыки</span>
                <span className="header__nav-item">Проекты</span>
                <span className="header__nav-item">Связаться</span>
            </nav>
        </header>
    );
}

export default Header;