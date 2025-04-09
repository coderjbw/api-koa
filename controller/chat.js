const OpenAI = require('openai');
const tools = require('@/config/tools');
const Validate = require('@/validata/index');
const {aliyun} = require('@/config/default');

const openai = new OpenAI(
    {
        apiKey: aliyun.apiKey,
        baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1"
    }
);

class ChatController {
    async chatMessage(ctx) {
        const {chatMessage} = ctx.request.body;
        console.log(chatMessage);
        await Validate.arrayCheck(chatMessage, 'chatMessage字段不能为空', 'chatMessage');

        let messages = [
            {role: "system", content: aliyun.systemContent},
            ...chatMessage
        ];
        const completion = await openai.chat.completions.create({
            model: "qwen-plus", //模型列表
            messages,
            stream: true,
            tools
        });
        for await (const chunk of completion) {
            const str = JSON.stringify(chunk);
            const obj = JSON.parse(str);
            console.log(str);
            console.log(obj);
        }
    }
}

module.exports = new ChatController();