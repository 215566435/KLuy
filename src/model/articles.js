import { ArticleManager } from "../Manager/article";
import { CommentManager } from "../Manager/comment";

export default {
    namespace: 'articles',
    state: {},
    reducer: {
        bindArticle(state, { payload }) {

            return { ...state, ...payload }
        },
        bindComments(state, { payload }) {
            return { ...state, CommentList: payload }
        },
        ClearComment(state) {
            return { ...state, CommentList: undefined }
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
        },
        *postComment({ put, call }, { payload }) {
            const cmanager = new CommentManager(call);
            const res = yield cmanager.postComment('/comments', payload);

            if (res.status === 'good') {
                window.location.reload();
            }
        },
        *LoadComment({ put, call }, { payload }) {
            const cmanager = new CommentManager(call);
            const res = yield cmanager.Get(`/comments/${payload}/${0}`)
            if (res.status === 'good') {
                console.log(res.data)
                yield put({
                    type: 'bindComments',
                    payload: res.data
                })
            }
        }
    }
}