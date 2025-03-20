const Koa = require('koa');
const cors = require('@koa/cors');
const json = require('koa-json');
const bodyparser = require('koa-bodyparser');
const moduleAlias = require('module-alias');
moduleAlias.addAliases({
    '@': __dirname
});
const router = require('@/router');
const app = new Koa();

app.use(json());
app.use(cors());
app.use(bodyparser());

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(7000);