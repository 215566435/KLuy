
export class BaseManager {
    constructor(call) {
        this.call = call;
        this.domain = 'http://yapi.demo.qunar.com/mock/4986'
        this.token = localStorage.getItem('token')
    }

    *Get(url) {
        try {
            const res = yield this.call(fetch, this.domain + url, {
                method: 'GET'
            })
            const json = yield res.json();
            return json;
        }
        catch (e) {
            console.log(e);
        }

    }
    *delete(url, body) {
        try {
            const res = yield this.call(fetch, this.domain + url, {
                method: 'DELETE',
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": 'application/json',
                    'Authorization': 'token ' + this.token
                }
            })
            const json = yield res.json();
            return json;
        }
        catch (e) {
            console.log(e);
        }
    }

    *fetch(url, body) {
        try {
            const res = yield this.call(fetch, this.domain + url, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": 'application/json',
                    'Authorization': 'token ' + this.token
                }
            })
            const json = yield res.json();
            return json;
        }
        catch (e) {
            console.log(e);
        }
    }
}