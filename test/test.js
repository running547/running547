const Koa = require('koa'),
    path = require('path'),
    static = require('koa-static'),
    router =require('koa-router')(),
    route =require('koa-route'),
    render = require('koa-art-template'),
    koaBodyparser = require('koa-bodyparser');
const websockify = require('koa-websocket');
const app = websockify(new Koa());
var t = "";

    app.ws.use(route.all('/connect', function (ctx) {
        ctx.websocket.send(t)
        console.log(t);
        ctx.websocket.on('message', function (message) {
            // 返回给前端的数据
           
            
            t+= message
            ctx.websocket.send(t)
        })
    }))


// const app = new Koa();

// 引入路由模块
const home = require('./routers/home.js');
const api = require('./routers/api.js');

//配置post的中间件
app.use(koaBodyparser());
//配置静态web
app.use(static(__dirname + '/dist'));
//配置页面路由
render(app, {
    root: path.join(__dirname, 'dist'),
    extname: '.html',
    debug: process.env.NODE_ENV !== 'production'
});
//配置路由
router.use(home);
router.use(api);
//启动路由
app.use(router.routes()).use(router.allowedMethods());


app.listen(8081)
console.log('启动服务成功,端口号8081')