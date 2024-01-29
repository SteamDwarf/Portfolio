import './introduction.style.scss';
import CartoonImage from '../../assets/images/cartoon-image.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandSpock, faClipboardUser, faAt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faTelegram, faVk } from '@fortawesome/free-brands-svg-icons';
import { getPublicPath } from '../../utils/data';
import ButtonLink from '../button-link/button-link.component';
import Socials from '../socials/socials.component';

const Introduction = () => {
    return (
        <section className="introduction" id='about'>
            <img src={CartoonImage} className="introduction__cartoon-image" />
            <div className="introduction__inforamtion">
                <h1 className="introduction__title">Привет <FontAwesomeIcon icon={faHandSpock} flip="horizontal" className="introduction__title-icon"/></h1>
                <div className="introduction__text">
                    <p className="introduction__paragraph introduction__paragraph_color_light">
                        Я веб-разработчик
                    </p>
                    <p className="introduction__paragraph">
                        Меня зовут Дмитрий Шажко. Я создаю веб-приложения и преподаю в школе CODDY.
                    </p>
                </div>
                <div className="introduction__interactive">
                    <Socials />
                    <ButtonLink className="introduction__cv-link" url={getPublicPath("assets/cv/Shazhko_Dmitriy_CV.pdf")} icon={faClipboardUser} text="Скачать Резюме"/>
                </div>
                
            </div>
        </section>
    );
}

export default Introduction;