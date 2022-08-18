import emailjs from '@emailjs/browser';

export const getPublicPath = (localPath) => {
    return process.env.NODE_ENV === 'development' 
            ? `http://localhost:3000/${localPath}` 
            : `${process.env.PUBLIC_URL}${localPath}`;
}

export const fetchData = (url, setDataFunc) => {
    return fetch(getPublicPath(url))
            .then(response => response.ok ? response.json() : Promise.reject)
            .then(data => setDataFunc(data.dataList))
            .catch(error => console.error(error));
}

export const sendEmailRequest = (form, successFunc, errorFunc) => {
    emailjs.sendForm('service_h7c84ak', 'template_ysa66eh', form, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
    .then(response => successFunc(response))
    .catch(error => errorFunc(error));
}