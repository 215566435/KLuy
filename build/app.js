"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const koa = require("koa");
const router = require("koa-router");
let app = new koa();
let route = new router();
function things(i, g) {
    console.log('好玩');
    return i;
}
route.get('/', (ctx, next) => {
    things(1, 2);
    ctx.response.body = '<h1>asdasd</h1>';
});
app
    .use(route.routes())
    .use(route.allowedMethods());
app.listen('3000', () => {
    console.log("Server running on 127.0.0.1 with 3000 restart!");
});
