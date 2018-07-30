const router=require('koa-router')();
const login=require('./admin/login.js');
const home=require('./home/home.js');

router.use('/login',login);
router.use('/home',home);
module.exports=router.routes();