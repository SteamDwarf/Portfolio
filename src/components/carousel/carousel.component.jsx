import './carousel.style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { getPublicPath } from '../../utils/data';
import { useState } from 'react';

const Carousel = ({className, carouselItems}) => {
    const [curSlide, setCurSlide] = useState(0);

    const prevSlide = () => {
        if(curSlide === 0) {
            setCurSlide(carouselItems.length - 1);
            return;
        }
        setCurSlide((value) => value - 1);
    }

    const nextSlide = () => {
        if(curSlide === carouselItems.length - 1) {
            setCurSlide(0);
            return;
        }
        setCurSlide((value) => value + 1);
    }

    return (
        <div className={`carousel ${className}`}>
            <FontAwesomeIcon 
                className="carousel__arrow carousel__arrow_direction_prev" 
                icon={faAngleLeft}
                onClick={prevSlide}
            />
            <FontAwesomeIcon 
                className="carousel__arrow carousel__arrow_direction_next" 
                icon={faAngleRight}
                onClick={nextSlide}
            />
            <div className="carousel__items-container" style={{transform: `translateX(-${curSlide * 100}%)`}}>
                {carouselItems.map(item => {
                    return <img key={Date.now() * Math.random()} src={getPublicPath(item)} className="carousel__item" />
                })}
            </div>
        </div>
    );
}

export default Carousel;