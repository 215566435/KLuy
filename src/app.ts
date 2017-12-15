import * as koa from 'koa';
import * as router from 'koa-router';

let app: koa = new koa();
let route: router = new router();

function log(fun: Function): Function {

    function decorator() {
        fun()
    }

    return decorator
}

class Foo {
    @log
    someMethod() { }
}


route.use('/', async (ctx, next) => {
    console.log('跑了中间件')
    await next()
    console.log('回来了')
})
route.get('/', async (ctx: koa.Context, next) => {
    // things(1, 2);
    console.log('跑了')
    ctx.response.body = '<h1>asdasd</h1>'
})

app
    .use(route.routes())
    .use(route.allowedMethods())

app.listen('3000', () => {
    console.log("Server running on 127.0.0.1 with 3000 restart!")
});
