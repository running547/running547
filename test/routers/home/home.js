/*-----------------------获取用户信息-----------------------*/


const jwt = require('jsonwebtoken')
const router = require('koa-router')();
const DB = require('../../tool/db.js')
//配置admin的子路由  层级路由
router.post('/', async (ctx) => {
    var userinfo = ctx.cookies.get('userinfo')
    await jwt.verify(userinfo, '547', function (err, decoded) {
        console.log(decoded)
        ctx.body = decoded;
    });

})
module.exports = router.routes();