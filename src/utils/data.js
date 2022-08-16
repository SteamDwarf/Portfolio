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