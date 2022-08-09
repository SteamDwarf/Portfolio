export const getPublicPath = (localPath) => {
    return process.env.NODE_ENV === 'development' 
            ? `http://localhost:3000/${localPath}` 
            : `${process.env.PUBLIC_URL}${localPath}`;
}