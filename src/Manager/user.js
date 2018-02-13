import { BaseManager } from "./base";

export class UserManager extends BaseManager {

    *userLogin(body) {
        return yield this.fetch('/login', body)
    }
    *auth() {
        const j = yield this.Get('/auth');
        console.log(j);
    }

}