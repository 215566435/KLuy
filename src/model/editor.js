import { ArticleManager } from "../Manager/article";
import { UserManager } from "../Manager/user";

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
        *checkAuth({ put, call }, { payload }) {
            const user = new UserManager(call);
            const res = yield user.auth();
            if (res.status === 'fail') {
                yield put({
                    type: 'redirect',
                    payload: {
                        redirectPath: '/login',
                        isRedirect: true
                    }
                })
            }

        },
        *postArticle({ put, call }, { payload }) {
            const amanager = new ArticleManager(call);
            const res = yield amanager.postArticle('/article', { ...payload })

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