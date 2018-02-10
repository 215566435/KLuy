import { ArticleManager } from "../Manager/article";

export default {
    namespace: 'intro',
    state: {},
    reducer: {
        articleList(state, { payload }) {

            return { ...state, articleList: payload.rows, count: payload.count }
        }
    },
    effects: {
        *fetchArticle({ put, call }, { payload }) {
            const amanager = new ArticleManager(call);
            const a = yield amanager.getArticle('/articles/' + payload);

            yield put({
                type: 'articleList',
                payload: a.data
            })
        }
    }
}