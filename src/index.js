import Rluy from 'rluy'
import './index.css'
import { message } from 'antd'
import registerServiceWorker from './registerServiceWorker'

Rluy.init()
Rluy.router(require('./router'))
Rluy.model(require('./model/editor'))
Rluy.model(require('./model/introduction'))
Rluy.model(require('./model/articles'))
Rluy.model(require('./model/login'))
Rluy.model(require('./model/console'))
Rluy.model(require('./model/exercise'))

Rluy.onError(e => {
    console.log('发生错误', e)
    message.error('客户端功能未实现或者发生错误')
})

Rluy.run(document.getElementById('root'))

registerServiceWorker()
