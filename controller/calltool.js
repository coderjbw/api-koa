

class CallToolsController {
  // 火车票查询
    async queryTrainTickets(ctx) {
        const { departure, destination, date } = ctx.request.body;
        await Validate.nullCheck(departure, "请传入出发地", "departure");
        await Validate.nullCheck(destination, "请传入到达站", "destination");
        await Validate.nullCheck(date, "请传入出发时间", "date");
        try {
            const res = await axios.get(queryTrainTicketsUrl, {
                params: { start: departure, end: destination, date },
                headers: { Authorization: `APPCODE ${appCode}` },
            });
            console.log(res);
            ctx.send(res.data.result.list);
        } catch (error) {
            console.log(error);
            const status = ["201", "203"];
            if (status.includes(error.response.data.status)) {
                ctx.send(
                [],
                200,
                "非常抱歉,没有查询到对应的车票信息，你可以重新试试哦！",
                null,
                201
                );
            } else {
                throw { msg: "查询出现异常错误了", code: 400, validate: null };
            }
        }
    }
    // 查询天气
    async queryWeather(ctx) {
        const { city } = ctx.query;
        console.log(city);
        await Validate.nullCheck(city, "请传入城市地区", "city");
        try {
            const res = await axios.get(queryWeatherUrl, {
                params: { area: city },
                headers: { Authorization: `APPCODE ${appCode}` },
            });
            ctx.send(res.data.showapi_res_body.dayList);
        } catch (error) {
            ctx.send(error.response.data);
            if (error.response.status === 450 && error.response.data) {
                ctx.send(
                [],
                200,
                "没有查询到该城市的天气哦，你可以重新尝试哦！",
                null,
                201
                );
            } else {
                throw { msg: "查询出现异常错误了", code: 400, validate: null };
            }
        }
    }
}

module.exports = new CallToolsController();
