function setToken(token) {
    localStorage.setItem('AUTH', token);
}

export function getToken() {
    return localStorage.getItem('AUTH');
}

export function register(data) {
    return fetch(`/api/register/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(async res => {
            if (res.status !== 200 && res.status !== 201) {
                const { message } = await res.json()
                throw new Error(message)
            }
            return res
        })
        .then(res => res.json())
        .then(res => {
            setToken(res.token);
            return res;
        })
}

export function login(data) {
    return fetch(`/api/login/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(async res => {
            if (res.status !== 200 && res.status !== 201) {
                const { message } = await res.json()
                throw new Error(message)
            }
            return res
        })
        .then(res => res.json())
        .then(res => {
            setToken(res.token);
            return res;
        })
}

export function logout() {
    localStorage.removeItem('AUTH');
}