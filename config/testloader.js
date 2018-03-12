module.exports = function(source) {
    console.log(source)

    // 对资源应用一些转换……

    return `${source}\n 
    Rluy.model(require('./model/exercise'))
    Rluy.model(require('./model/editor'))
    Rluy.model(require('./model/introduction'))
    Rluy.model(require('./model/articles'))
    Rluy.model(require('./model/login'))
    Rluy.model(require('./model/console'))
    `
}
