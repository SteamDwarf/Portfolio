import './introduction.style.scss';
import CartoonImage from '../../assets/images/cartoon-image.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandSpock, faClipboardUser, faAt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faTelegram, faVk } from '@fortawesome/free-brands-svg-icons';
import { getPublicPath } from '../../utils/data';
import ButtonLink from '../button-link/button-link.component';

const Introduction = () => {
    return (
        <section className="introduction" id='about'>
            <img src={CartoonImage} className="introduction__cartoon-image" />
            <div className="introduction__inforamtion">
                <h1 className="introduction__title">Привет <FontAwesomeIcon icon={faHandSpock} flip="horizontal" className="introduction__title-icon"/></h1>
                <div className="introduction__text">
                    <p className="introduction__paragraph introduction__paragraph_color_light">
                        Я фронтенд-разработчик
                    </p>
                    <p className="introduction__paragraph">
                        Меня зовут Дмитрий Шажко и я создаю веб приложения
                    </p>
                </div>
                <div className="introduction__interactive">
                    <nav className="introduction__socials">
                        <a href="https://vk.com/id133141513" target="_blank" className="introduction__link">
                            <FontAwesomeIcon className="introduction__link-icon introduction__link-icon_type_vk" icon={faVk}/>
                        </a>
                        <a href="https://t.me/ShazhkoDmitriy" target="_blank" className="introduction__link">
                            <FontAwesomeIcon className="introduction__link-icon introduction__link-icon_type_telegram" icon={faTelegram} />
                        </a>
                        <a href="https://www.linkedin.com/in/dmitriy-shazhko-a66399244/" target="_blank" className="introduction__link">
                            <FontAwesomeIcon className="introduction__link-icon introduction__link-icon_type_linkedin" icon={faLinkedinIn} />
                        </a>
                        <a href="mailto:schajckodmitrij@gmail.com">
                            <FontAwesomeIcon className="introduction__link-icon introduction__link-icon_type_mail" icon={faAt}/>
                        </a>
                    </nav>

                    <ButtonLink className="introduction__cv-link" url={getPublicPath("assets/cv/Shazhko_Dmitriy_CV.pdf")} icon={faClipboardUser} text="Скачать Резюме"/>
                </div>
                
            </div>
        </section>
    );
}

export default Introduction;