// 统一的错误处理
const errorHandler = async (ctx, next) => {
    try {
        await next();
    }
    catch (error) {
        console.log('捕获到了错误！');
        console.log(error);
        const errorMsg = error.message || '异常错误，请查看服务器日志！';
        const errorStatus = error.status || error.statusCode || 500;
        ctx.send(null, errorStatus, '服务端异常错误', errorMsg);
    }
}

module.exports = errorHandler;