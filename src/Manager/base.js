
export class BaseManager {
    constructor(call) {
        this.call = call;
        this.domain = 'http://127.0.0.1:7001'
    }

    *Get(url) {
        const res = yield this.call(fetch, this.domain + url, {
            method: 'GET',
        })
        const json = yield res.json();
        return json;
    }

    *fetch(url, body) {
        const res = yield this.call(fetch, this.domain + url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                "Content-Type": 'application/json'
            }
        })
        const json = yield res.json();
        return json;
    }
}