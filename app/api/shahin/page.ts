import { NextApiRequest, NextApiResponse } from "next";
import { OpenAI } from "openai";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req);
  if (req.method === "POST") {
    console.log('first')
    // return res.json();
    // const reqBody = await req.body;

    // const openai = new OpenAI({
    //   apiKey: process.env.OPENAI_API_KEY,
    //   organization: process.env.OPENAI_ORGANIZATIONS,
    // });

    // const openAIResponse = openai.chat.completions.create(
    //   {
    //     model: "gpt-3.5-turbo",
    //     messages: [
    //       {
    //         role: "user",
    //         content: reqBody.content
    //       }
    //     ]
    //   }
    // );

    // const aiResponseMessage = (await openAIResponse).choices[0].message;
    // console.log(aiResponseMessage);
    // return res.json(aiResponseMessage);
  }
}
