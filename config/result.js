// 统一接口数据格式
const responseHandler = async (ctx, next) => {
    ctx.send = (data=null, code=200, msg='SUCCESS',error=null, serviceCode=200) => {
        ctx.body = {
            data,
            msg,
            error,
            serviceCode
        };
        ctx.status = code;
    }
    await next();
};

module.exports = responseHandler;