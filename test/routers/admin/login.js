/*-----------------------登录模块-----------------------*/






const jwt = require('jsonwebtoken')
const router = require('koa-router')();
const DB = require('../../tool/db.js')
//配置admin的子路由  层级路由
router.post('/', async (ctx) => {
    let name = ctx.request.body.name,
        pwd = ctx.request.body.pwd,
        resData = [];
    await DB.query(`select * from user where userName="${name}" and userPwd="${pwd}"`, {})
    .then((_resData) => {
        resData = _resData;
        ctx.body = resData;
        if(resData.length > 0){
            ctx.body = {issuc:true,data:{},message:"登录成功"}
            let token = jwt.sign({...resData["0"]}, '547');
            console.log(token)
        }else{
            ctx.body = {issuc:true,data:{},message:"账户密码错误"}
        }
    })
   
})
module.exports = router.routes();