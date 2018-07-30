
/*-----------------------登录模块-----------------------*/

const router = require('koa-router')();
const DB = require('../../tool/db.js')
//配置admin的子路由  层级路由
router.post('/', async (ctx) => {
    // console.log(ctx.request.body)
    // let findUserData = function (name,pwd) {
    //     let _sql = `select * from user where userName="${name}" and userPwd="${pwd}"`;
    //     return query(_sql).then((res)=>console.log(res))
    // }
    // findUserData(ctx.request.body.name,ctx.request.body.pwd)
    let name = ctx.request.body.name,
        pwd = ctx.request.body.pwd;
    DB.query(`select * from user where userName="${name}" and userPwd="${pwd}"`,{}).then((res)=>console.log(res))
    ctx.body = { user: '547', pwd: '123456' }
})
module.exports = router.routes();