const Router = require('@koa/router');
const router = new Router();

const user = require('@/controller/user');

router.post('/login', user.login);

module.exports = router;