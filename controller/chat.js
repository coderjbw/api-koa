const OpenAI = require('openai');
const {aliyun} = require('@/config/default');

const openai = new OpenAI(
    {
        apiKey: aliyun.apiKey,
        baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1"
    }
);

class ChatController {
    async chatMessage() {
        const {} = ctx.request.body;
        const completion = await openai.chat.completions.create({
            model: "qwen-plus", // 此处以qwen-plus为例，可按需更换模型名称。模型列表：https://help.aliyun.com/zh/model-studio/getting-started/models
            messages: [
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": "你是谁？"}
            ],
            stream: true,
        });
        for await (const chunk of completion) {
            console.log(JSON.stringify(chunk));
        }
    }
}

module.exports = new ChatController();