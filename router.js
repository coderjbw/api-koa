const Router = require('@koa/router');
const router = new Router();

// 文件上传中间件
const uploadFile = require('@/config/uploadFile');
const user = require('@/controller/user');
const chat = require('@/controller/chat');
const callTools = require('@/controller/calltool');
// 商品
const goods = require("@/controller/goods");
// 投诉
const complaint = require("@/controller/complaint");

router.post('/login', user.login);
router.post('/chatMessage', chat.chatMessage);
router.post('/uploadFile', uploadFile.single('file'), chat.uploadFile);
router.post('/getWeather', callTools.queryWeather);
router.post('/getTrainTickets', callTools.queryTrainTickets);
router.get('/addGoods', goods.addGoods);
router.post('/goodsDetail', goods.goodsDetail);
router.post('/searchGoods', goods.searchGoods);
// 投诉接口
router.post('addComplaint', complaint.addComplaint);

module.exports = router;