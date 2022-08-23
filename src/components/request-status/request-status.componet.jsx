import './request-status.style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

const RequestStatus = ({response, className}) => {
    if(response.status) {
        return (
            <div className={`request-status ${className}
                    ${response.status === 200 
                        ? 'request-status_type_success' 
                        : 'request-status_type_error'
                    }
            `}>
                <FontAwesomeIcon icon={response.status === 200 ? faCircleCheck : faCircleExclamation}/>
                {response.text}
            </div>
        );
    }

    return <div className="request-status request-status_type_hide"></div>;    
}

export default RequestStatus;