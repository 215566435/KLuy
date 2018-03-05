import { BaseManager } from "./base";

export class ExcersiseManager extends BaseManager {

    *getExcersise(url) {
        return yield this.Get(url)
    }

}