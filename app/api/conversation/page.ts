import { OpenAI } from "openai";

export default async function handler(req: any, res:any) {
 try {
  if (req.method === "POST") {
    console.log('hit')
    const reqBody = await req.body;

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
      organization: process.env.OPENAI_ORGANIZATIONS,
    });

    const openAIResponse = openai.chat.completions.create(
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: "how are you?"
          }
        ]
      }
    );

    const aiResponseMessage = (await openAIResponse).choices[0].message;
    console.log(aiResponseMessage);
    return res.json(aiResponseMessage);
  }
 } catch (error) {
  console.log(error + 'from 31');
 }
}
