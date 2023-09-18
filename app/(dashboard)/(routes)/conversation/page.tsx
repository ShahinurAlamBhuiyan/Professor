"use client"
import * as z from 'zod'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import axios from 'axios'

import Heading from "@/components/heading"
import { formSchema } from './constants'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const ConversationPage = () => {
    const router = useRouter();
    const [messages, setMessages] = useState<string[]>([]);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: ""
        }
    });

    const isLoading = form.formState.isSubmitting;


    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const data = await fetchedSelectedQuestion(values.prompt);
        // console.log(data);
    }

    const fetchedSelectedQuestion = async (userMessage: any) => {


        fetch('/api/shahin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                time: new Date().toISOString()
            }),
        })





        console.log(userMessage);
        // const res = await axios.post("/api/shahin", {
        //     content: userMessage
        // })
        // const res = await fetch("/api/shahin", {

        //     method: "POST",
        //     body: JSON.stringify({
        //         content: userMessage
        //     }),
        //     headers: {
        //         "Content-Type": "application/json",
        //         // 'content-type': 'application/json'  
        //     },

        // });
        // const data = await res.json();
        // console.log(res);
        // console.log(res.data);
    };




    return (
        <div>
            <Heading
                title="Conversation"
                description="Our most advanced conversation model"
                iconName="message-square"
                iconColor="text-violet-500"
                bgColor="bg-violet-500/10"
            />
            <div className=" px-4 lg:px-8">
                <div>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            action=""
                            className=' rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2'
                        >
                            <FormField
                                name='prompt'
                                render={({ field }) => (
                                    <FormItem className=' col-span-12 lg:col-span-10'>
                                        <FormControl className=' m-0 p-0'>
                                            <Input
                                                className=' border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent'
                                                disabled={isLoading}
                                                placeholder='How do I calculate the radius of a circle?'
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <Button className=' col-span-12 lg:col-span-2 w-full' disabled={isLoading}>
                                Generate
                            </Button>
                        </form>
                    </Form>
                    <button onClick={fetchedSelectedQuestion}>hola</button>
                </div>
            </div>
        </div>
    )
}

export default ConversationPage