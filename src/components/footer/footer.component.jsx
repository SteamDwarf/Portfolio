import Socials from '../socials/socials.component';
import './footer.style.scss';
import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <Socials />
        <nav className='footer__navigation'>
            <a href="#about" className="header__nav-link">Обо мне</a>
            <a href="#skills" className="header__nav-link">Навыки</a>
            <a href="#projects" className="header__nav-link">Проекты</a>
        </nav>
        <div className='footer__copyright'>
            <span>@2022. Шажко Д.С. </span>
            <a className='footer__mail' href="mailto:schajckodmitrij@gmail">schajckodmitrij@gmail</a> 
        </div>
    </div>
  )
}

export default Footer