export const getUserToken = () => {
    try {
        return localStorage.getItem('token');
    }
    catch (e) {
        return "";
    }
}

export const setUserToken = (token) => {
    localStorage.setItem('token', token);
}

export const isUserToken = (link='login') => {
    const token = getUserToken();
    if (token === null || token === "") {
        if(typeof window !== 'undefined') {
            window.location.href=link;
        }
        return false;
    }
    return token;
}