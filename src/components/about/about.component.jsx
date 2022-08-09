import './about.style.scss';
import CartoonImage from '../../assets/images/cartoon-image.jpg';

const About = () => {
    return (
        <section className="about" id="about">
            <img src={CartoonImage} alt="Шажко Дмитрий" className="about__image" />
            <div className="about__information">
                <p className="about__greetings">Рад вас видеть</p>
                <h2 className="about__title">Я Шажко Дмитрий</h2>
                <p className="about__paragraph">
                    Я FrontEnd разработчик с 1,5 годами опыта в поиске вакансии.
                </p>
                <p className="about__paragraph">
                    Я люблю программировать, изучаю современные технологии програмирования и использую их в своих приложениях.
                </p>
                <p className="about__paragraph">
                    Я целеустремленный, старательный, ответственный, люблю работать в команде и всегда готов прийти на помощь своим коллегам.
                </p>
            </div>
        </section>
    );
}

export default About;