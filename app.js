const Koa = require('koa');
const cors = require('@koa/cors');
const json = require('koa-json');
const bodyparser = require('koa-bodyparser');
// 提供静态文件服务的中间件
const static = require('koa-static');
const path = require('path');
const moduleAlias = require('module-alias');
moduleAlias.addAliases({
    '@': __dirname
});
const responseHandler = require('@/config/result');
const errorHandler = require('@/config/errorHandler');
const router = require('@/router');
const app = new Koa();

app.use(json());
app.use(cors());
app.use(bodyparser());
 
app.use(responseHandler);
app.use(errorHandler);
app.use(static(path.join(__dirname)));
app.use(router.routes())
    .use(router.allowedMethods());

app.listen(7000);