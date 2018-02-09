import { BaseManager } from "./base";

export class ArticleManager extends BaseManager {

    *postArticle(url, body) {
        return yield this.fetch(url, body)
    }

    *getArticle(url) {
        return yield this.Get(url)
    }
    *getOneArticle(url) {
        return yield this.Get(url)
    }

}