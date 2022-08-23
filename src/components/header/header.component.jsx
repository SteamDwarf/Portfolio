import './header.style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import HeaderNav from './__nav/header__nav.component';

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo-container">
                <FontAwesomeIcon icon={faCode} className="header__logo"/>
            </div>
            <HeaderNav />
        </header>
    );
}

export default Header;