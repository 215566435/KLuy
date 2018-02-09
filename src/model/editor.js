import { ArticleManager } from "../Manager/article";

export default {
    namespace: 'editor',
    state: {},
    reducer: {
        change(state, { payload }) {
            return { ...state, routerState: payload }
        },
        mapID(state, { payload }) {

            return { ...state, d: payload }
        }
    },
    effects: {
        *d({ put }, { payload }) {
            yield put({
                type: 'mapID',
                payload
            })
        },
        *postArticle({ put, call }, { payload }) {
            const amanager = new ArticleManager(call);
            const res = yield amanager.postArticle('/article', {
                title: payload.title,
                content: payload.content
            })
            console.log(res);
        }
    }
}