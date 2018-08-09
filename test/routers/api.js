const router = require('koa-router')();
const login = require('./admin/login.js');
const home = require('./home/home.js');
const connect = require('./home/connect.js');
const register = require('./admin/register.js');

router.use('/login', login);
router.use('/home', home);
router.use('/register', register);

module.exports = router.routes();