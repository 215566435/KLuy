import { ArticleManager } from "../Manager/article";

export default {
    namespace: 'intro',
    state: {},
    reducer: {
        articleList(state, { payload }) {

            return { ...state, articleList: payload }
        }
    },
    effects: {
        *fetchArticle({ put, call }, { payload }) {
            const amanager = new ArticleManager(call);
            const a = yield amanager.getArticle('/articles/0');

            yield put({
                type: 'articleList',
                payload: a.data
            })
        }
    }
}