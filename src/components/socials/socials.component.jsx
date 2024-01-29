import './socials.style.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVk, faTelegram, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';

const Socials = () => {
  return (
    <nav className="socials">
        <a href="https://vk.com/id133141513" target="_blank" className="socials__link">
            <FontAwesomeIcon className="socials__link-icon socials__link-icon_type_vk" icon={faVk}/>
        </a>
        <a href="https://t.me/ShazhkoDmitriy" target="_blank" className="socials__link">
            <FontAwesomeIcon className="socials__link-icon socials__link-icon_type_telegram" icon={faTelegram} />
        </a>
        <a href="https://www.linkedin.com/in/dmitriy-shazhko-a66399244/" target="_blank" className="socials__link">
            <FontAwesomeIcon className="socials__link-icon socials__link-icon_type_linkedin" icon={faLinkedinIn} />
        </a>
        <a href="mailto:schajckodmitrij@gmail.com">
            <FontAwesomeIcon className="socials__link-icon socials__link-icon_type_mail" icon={faAt}/>
        </a>
    </nav>
  )
}

export default Socials;