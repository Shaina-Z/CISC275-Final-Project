import OpenAI from "openai";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function runGPT(answers: string[]) {
  const message = `Quiz responses:\n${answers.join("\n")}\nWhat careers would fit?`;

  const res = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      { role: "system", content: "You are a helpful career assistant." },
      { role: "user", content: message },
    ],
  });

  return res.choices[0].message.content;
} 