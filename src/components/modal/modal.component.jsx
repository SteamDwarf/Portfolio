import './modal.style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { AppContext } from '../../context/app-context.context';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Modal = ({children}) => {
    const {setIsModalOpen, setModalContent} = useContext(AppContext);

    const closeModal = ({target}) => {
        if(target.classList.contains('modal') || target.classList.contains('modal__close-btn')) {
            console.log(target.closest('.modal__close-btn'))
            setIsModalOpen(false);
            setModalContent(null);
        }
    }

    return (
        <div className="modal" onClick={closeModal}>
            <div className="modal__container">
                <span className="modal__close-btn" icon={faXmark} onClick={closeModal}>&times;</span>
                {/* <FontAwesomeIcon className="modal__close-btn" icon={faXmark} onClick={closeModal}/> */}
                {children}
            </div>
        </div>
    );
}

export default Modal;