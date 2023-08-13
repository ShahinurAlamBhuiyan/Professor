
import { auth } from '@clerk/nextjs';
import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';
import { Configuration, OpenAIApi} from 'openai'


const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration);



export default async function handler(req: NextApiRequest) {
    
    try {
        const { userId } = auth();
        console.log(req, "request")
        // const body = await req.json();

        
        // const { messages  } = body;

        // if (!userId) {
        //   return new NextResponse("Unauthorized", { status: 401 });
        // }

        // if (!configuration.apiKey) {
        //   return new NextResponse("OpenAI API Key not configured.", { status: 500 });
        // }

        // if (!messages) {
        //   return new NextResponse("Messages are required", { status: 400 });
        // }

        // console.log('first1')
        // const response = await openai.createChatCompletion({
        //   model: "gpt-3.5-turbo",
        //   messages
        // });
        // console.log('first1')
        // console.log(NextResponse.json(response.data.choices[0].message));
        // return NextResponse.json(response.data.choices[0].message);

    } catch (error) {
        console.log("[CONVERSATION_ERROR]", error);
        return new NextResponse("Internal error", {status: 500});
    }
}
