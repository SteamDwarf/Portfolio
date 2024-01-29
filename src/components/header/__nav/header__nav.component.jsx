import './header__nav.style.scss';
import BurgerBtn from '../../burger-btn/burger-btn.component';
import { useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../../../context/app-context.context';

const HeaderNav = () => {
    const [isShowNavBar, setIsShowNavBar] = useState(false);
    const {isModalOpen} = useContext(AppContext);

    const toggleNavBar = () => {
        setIsShowNavBar(!isShowNavBar);
    }

    return (
        <div className={`"header__nav" ${!isModalOpen ? 'active' : ''}`}>
            <nav className={`header__nav-list ${isShowNavBar ? 'active' : ''}`}>
                <a href="#about" className="header__nav-link" onClick={toggleNavBar}>Обо мне</a>
                <a href="#skills" className="header__nav-link" onClick={toggleNavBar}>Навыки</a>
                <a href="#projects" className="header__nav-link" onClick={toggleNavBar}>Проекты</a>
                {/* <a href="#contact" className="header__nav-link" onClick={toggleNavBar}>Связаться</a> */}
            </nav>
            <BurgerBtn className={`header__nav-burger-btn ${isShowNavBar ? 'active' : ''}`} onClick={toggleNavBar}/>
        </div>
    );
}

export default HeaderNav;