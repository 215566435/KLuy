import { ArticleManager } from "../Manager/article";

export default {
    namespace: 'articles',
    state: {},
    reducer: {
        bindArticle(state, { payload }) {

            return { ...state, ...payload }
        }
    },
    effects: {
        *FetchOneArticle({ put, call }, { payload }) {
            const amanager = new ArticleManager(call);
            const res = yield amanager.getArticle('/article/' + payload);
            console.log(res);
            yield put({
                type: 'bindArticle',
                payload: res
            })
        }
    }
}