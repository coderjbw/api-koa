const Router = require('@koa/router');
const router = new Router();

// 文件上传中间件
const uploadFile = require('@/config/uploadFile');
const user = require('@/controller/user');
const chat = require('@/controller/chat');
const callTools = require('@/controller/calltool');

router.post('/login', user.login);
router.post('/chatMessage', chat.chatMessage);
router.post('/uploadFile', uploadFile.single('file'), chat.uploadFile);
router.post('/getWeather', callTools.queryWeather);
router.post('/getTrainTickets', callTools.queryTrainTickets);

module.exports = router;