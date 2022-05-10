import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

// export const API_ROOT = 'http://localhost:4000/';  //LOCAL SERVER
export const API_ROOT = 'https://stephblog-api.herokuapp.com/';  //TESTING SERVER

let token = null;
const responseBody = res => res.body;

const getAuthToken = () => {
    const auth = JSON.parse(window.localStorage.getItem('account'));
    const token = auth ? auth.token : null;
    return token;
}

export const tokenPlugin = req => {
    req.set('Accept', 'application/json');

    token = getAuthToken();
    if (token) {
        req.set('Authorization', `Bearer ${token}`);
    }

    req.on('error', (error) => {
        if (error.status === undefined) {
            console.log(error) //TODO // implement alert
        }

    });
    req.on('response', function (res) {
        if (res.status === 401) {
            // redirect to login page here
            localStorage.setItem("lastAccessedUrl", window.location.pathname);
            window.location.href = `${window.location.origin}/login`;

        }
        if (res.body.error) {
        }

        if (res.body?.message && Array.isArray(res.body.message) && res.body.message.length > 0) {
        }
    });

}

const requests = {
    del: url =>
        superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
    get: url =>
        superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
    put: (url, body) =>
        superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
    post: (url, body) =>
        superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
    patch: (url, body) =>
        superagent.patch(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody)
};

const Account = {
    isAuth: () => {
        const token = getAuthToken();
        return !!token;
    },
    saveAuthData: (_user) => {
        window.localStorage.setItem('account', JSON.stringify(_user));
        token = _user.token;
    },
    logout: () => {
        window.localStorage.removeItem('account')
        token = null
    },
    login: (email, password) =>
        requests.post('account/login', { email, password }),
    register: data =>
        requests.post('account/register', data),
}

const Blog = {
    save: (data) =>
        requests.post(`blogs`, data),
    load: () =>
        requests.get(`blogs`)
}

const api = {
    Account,
    Blog,
    setToken: _token => { token = _token; },
}

export default api;
