import * as koa from 'koa';
import * as router from 'koa-router';

let app: koa = new koa();
let route: router = new router();

function things(i: number, g: number): number {
    console.log('好玩')
    return i
}

route.get('/', (ctx: koa.Context, next) => {
    things(1, 2);
    ctx.response.body='<h1>asdasd</h1>'
})

app
    .use(route.routes())
    .use(route.allowedMethods())

app.listen('3000', () => {
    console.log("Server running on 127.0.0.1 with 3000 restart!")
});
