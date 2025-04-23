import OpenAI from "openai";
const client = new OpenAI();

const completion = async()=>{await client.chat.completions.create({
    model: "gpt-4.1",
    messages: [
        {
            role: "user",
            content: "Write a one-sentence bedtime story about a unicorn.",
        },
    ],
});
}

console.log(completion.choices[0].message.content);