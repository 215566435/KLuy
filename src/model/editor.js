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
        }
    }

}