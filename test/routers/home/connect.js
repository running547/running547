

const Koa = require('koa')
// 路由
const route = require('koa-route')
// koa封装的websocket这是官网（很简单有时间去看一下https://www.npmjs.com/package/koa-websocket）
const websockify = require('koa-websocket')
const app = websockify(new Koa());

app.ws.use(route.all('/connect', function (ctx) {
    ctx.websocket.on('message', function (message) {
        // 返回给前端的数据
        ctx.websocket.send(message)
    })
}))


module.exports = app