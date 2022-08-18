import './contact.style.scss';
import Button from '../button/button.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { sendEmailRequest } from '../../utils/data';
import { useRef, useState } from 'react';
import RequestStatus from '../request-status/request-status.componet';

const Contact = () => {
    const [responseData, setResponseData] = useState({});
    const form = useRef();

    const sendEmailSuccess = (response) => {
        setResponseData(response);
        form.current.reset();
        setTimeout(() => setResponseData({}), 3000);
    }

    const sendEmailError = (response) => {
        console.error(response);
        setResponseData({status: response.status, text: `Error: ${response.status}`});
    }

    const sendEmail = (e) => {
        e.preventDefault();
        sendEmailRequest(form.current, sendEmailSuccess, sendEmailError);
    }
    

    return (
        <div className="contact">
            <h2 className="contact__title">Связаться</h2>
            <form ref={form} onSubmit={sendEmail} className="contact__form">
                <div className="contact__input-item">
                    <label className="contact__input-label">Имя</label>
                    <input type="text" name="name" className="contact__input" required/>
                </div>
                <div className="contact__input-item">
                    <label className="contact__input-label">Электронная почта</label>
                    <input type="email" name="email" className="contact__input" required/>
                </div>
                <div className="contact__input-item">
                    <label className="contact__input-label">Сообщение</label>
                    <textarea name="message" className="contact__input contact__input_type_textarea" />
                </div>
                <div className="contact__form-footer">
                    <RequestStatus className="contact__form-request-status" response={responseData}/>
                    <Button className="contact__submit" type="submit"><FontAwesomeIcon icon={faPaperPlane}/> Связаться</Button>
                </div>
            </form>
        </div>
    );
}

export default Contact;