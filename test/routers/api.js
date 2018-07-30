const router=require('koa-router')();
const login=require('./admin/login.js');

router.use('/login',login);
module.exports=router.routes();