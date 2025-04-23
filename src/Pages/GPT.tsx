import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, 
});

async function run() {
  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-4o", 
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: "What's the weather like in Paris?" },
    ],
  });

  console.log(chatCompletion.choices[0].message.content);
}

run();