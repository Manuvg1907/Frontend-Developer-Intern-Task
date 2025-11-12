export function isLoggedIn() {
    if (typeof window !== "undefined") {
        return !!localStorage.getItem('token');
    }
    return false;
}

export function logout() {
    if (typeof window !== "undefined") {
        localStorage.removeItem('token');
    }
}

export function getToken() {
    if (typeof window !== "undefined") {
        return localStorage.getItem('token');
    }
    return null;
}

export function saveToken(token) {
    if (typeof window !== "undefined") {
        localStorage.setItem('token', token);
    }
}
