const Router = require('@koa/router');
const router = new Router();

const user = require('@/controller/user');
const chat = require('@/controller/chat');

router.post('/login', user.login);
router.post('/chatMessage', chat.chatMessage);

module.exports = router;