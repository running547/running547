/*-----------------------获取用户信息-----------------------*/

const jwt = require('jsonwebtoken')
const router = require('koa-router')();
const DB = require('../../tool/db.js')
//配置admin的子路由  层级路由
router.post('/', async (ctx) => {
    var userinfo = ctx.cookies.get('userinfo')
    await jwt.verify(userinfo, '547', function (err, decoded) {
        ctx.body = decoded;
    });

})

router.post('/remove', async (ctx, next) => {
    if (ctx.cookies.get('userinfo')) {
        ctx.cookies.set('userinfo', null, {
            maxAge: 60 * 1000 * 60,
        });
        ctx.body = { issuc: true }
    } else {
        ctx.body = { issuc: '已经删除过了' }
    }
})
module.exports = router.routes();