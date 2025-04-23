import OpenAI from "openai";
import{responses} from "openai";
const openai = new OpenAI();

const response = async()=>{await openai.responses.create({
    model: "gpt-4o",
    input: "Tell me a three sentence bedtime story about a unicorn."
});
}

console.log(response);