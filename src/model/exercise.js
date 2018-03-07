import { ExcersiseManager } from '../Manager/excersise'

export default {
    namespace: 'exercise',
    state: { history: [] },
    reducer: {
        bindHistory(state, { payload }) {
            return { ...state, history: payload }
        },
        bindExcersise(state, { payload }) {
            return { ...state, exercise: payload }
        }
    },
    effects: {
        *fetchHistory({ put, call }, { payload }) {
            yield put({
                type: 'bindHistory',
                payload: []
            })
            const exmanager = new ExcersiseManager(call)
            const json = yield exmanager.getExcersise('/history')
            yield put({
                type: 'bindHistory',
                payload: json.data.history
            })
        },
        *fetchExerciseAll({ put, call }, { payload }) {
            yield put({
                type: 'bindExcersise',
                payload: []
            })
            const exmanager = new ExcersiseManager(call)
            const json = yield exmanager.getExcersise('/category/123')

            yield put({
                type: 'bindExcersise',
                payload: json.data.exercise
            })
        }
    }
}
