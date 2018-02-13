import { UserManager } from "../Manager/user";
import { message } from 'antd';

export default {
    namespace: 'user',
    state: { isLogin: false },
    reducer: {
        login(state) {

            return {
                ...state,
                isLogin: true
            }
        }
    },
    effects: {
        *postLogin({ put, call }, { payload }) {

            const user = new UserManager(call);
            const res = yield user.userLogin(payload);
            console.log(res);
            if (res.status === 'good') {
                localStorage.setItem('token', res.data.token);
                yield put({
                    type: 'login'
                })
            } else {
                message.error('账号密码错误');
            }
        }
    }
}