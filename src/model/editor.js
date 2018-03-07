import { UserManager } from '../Manager/user'
import { CategoryManager } from '../Manager/category'

const addType = (array, type) => {
    return array.map(item => {
        return { ...item, type: type }
    })
}

export default {
    namespace: 'editor',
    state: { category: [] },
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
        },
        mapCategory(state, { payload }) {
            return {
                ...state,
                category: payload
            }
        }
    },
    effects: {
        *checkAuth({ put, call }, { payload }) {
            const user = new UserManager(call)
            const res = yield user.auth()
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
        *fetchExcersise({ put, call }, { payload }) {
            yield put({
                type: 'mapCategory',
                payload: []
            })
            const Category = new CategoryManager(call)
            const json = yield Category.getCategory('/category/123')
            yield put({
                type: 'mapCategory',
                payload: addType(json.data.exercise, 'exercise')
            })
        },
        *fetchCategory({ put, call, select }, { payload }) {
            const Category = new CategoryManager(call)
            const json = yield Category.getCategory('/category')
            yield put({
                type: 'mapCategory',
                payload: addType(json.data.category, 'category')
            })
        }
    }
}
