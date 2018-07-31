/*-----------------------登录模块-----------------------*/

const jwt = require('jsonwebtoken')
const router = require('koa-router')();
const DB = require('../../tool/db.js')
//配置admin的子路由  层级路由
router.post('/', async (ctx) => {
    let userinfo = ctx.request.body;
    await DB.query(`insert into user (userName,userPwd) values (${userinfo.name},${userinfo.pwd}) `, {})
    .then((res)=>{
        ctx.body = { issuc: true, data: {}, message: "注册成功" }
        let token = jwt.sign({ ...res["0"] }, '547');
        ctx.cookies.set('userinfo', token, {
            maxAge: 60 * 1000 * 60,
            // path:'/news',  /*配置可以访问的页面*/
            //domain:'.baidu.com'  /*正常情况不要设置 默认就是当前域下面的所有页面都可以方法*/
            httpOnly: false,  //true表示这个cookie只有服务器端可以访问，false表示客户端（js），服务器端都可以访问
        });
    })

   



})
module.exports = router.routes();