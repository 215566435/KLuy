import { ArticleManager } from "../Manager/article";

export default {
    namespace: 'editor',
    state: {},
    reducer: {
        change(state, { payload }) {
            return { ...state, routerState: payload, isRedirect: false }
        },
        redirect(state, { payload }) {

            return {
                ...state,
                redirectPath: { pathname: payload.redirectPath },
                isRedirect: payload.isRedirect
            }
        }
    },
    effects: {
        *postArticle({ put, call }, { payload }) {
            const amanager = new ArticleManager(call);
            const res = yield amanager.postArticle('/article', {
                title: payload.title,
                content: payload.content
            })

            if (res.status === 'good') {
                yield put({
                    type: 'redirect',
                    payload: {
                        isRedirect: true,
                        redirectPath: '/'
                    }
                })
            }
        }
    }
}