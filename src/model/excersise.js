import { ExcersiseManager } from "../Manager/excersise";

export default {
    namespace: 'excersise',
    state: { history: [] },
    reducer: {
        bindHistory(state, { payload }) {

            return { ...state, history: payload }
        }
    },
    effects: {
        *fetchHistory({ put, call }, { payload }) {
            const exmanager = new ExcersiseManager(call);
            const json = yield exmanager.getExcersise('/history');
            yield put({
                type: 'bindHistory',
                payload: json.data.history
            })
        }
    }
}