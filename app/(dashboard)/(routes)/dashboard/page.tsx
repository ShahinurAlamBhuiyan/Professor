'use client'

import Icon from "@/components/ui/Icon"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

const tools = [
    {
        label: "Conversation",
        icon: <Icon name="message-square" className="text-violet-500 w-8 h-8" />,
        href: '/conversation',
        bgColor: "bg-violet-500/10"
    },
    {
        label: "Music",
        icon: <Icon name="music" className="text-emerald-500 w-8 h-8" />,
        href: '/music',
        bgColor: "bg-emerald-500/10"
    },
    {
        label: "Image Generation",
        icon: <Icon name="image" className="text-pink-700 w-8 h-8" />,
        href: '/image',
        bgColor: "bg-pink-700/10"
    },
    {
        label: "Video Generation",
        icon: <Icon name="video" className="text-orange-700 w-8 h-8" />,
        href: '/video',
        bgColor: "bg-orange-700/10"
    },
    {
        label: "Code Generation",
        icon: <Icon name="code" className="text-green-500 w-8 h-8" />,
        href: '/code',
        bgColor: "bg-green-500/10"
    },
]

export default function DashboardPage() {
    const router = useRouter();
    return (
        <div>
            <div className="mb-8 space-y-4">
                <h2 className=" text-2xl md:text-4xl font-bold text-center">
                    Explore the power of AI
                </h2>
                <p className=" text-muted-foreground font-light text-sm md:text-lg text-center">
                    chat with the smartest AI - Experience the power of AI
                </p>
            </div>
            <div className=" px-4 md:px-20 lg:px-32 space-y-4">
                {tools.map((tool) => (
                    <Card
                    onClick={() => router.push(tool.href)}
                        key={tool.href}
                        className=" p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
                    >
                        <div className=" flex items-center gap-x-4">
                            <div className={cn(" p-2 w-fit rounded-md", tool.bgColor)}>
                                {tool.icon}
                            </div>
                            <div className=" font-semibold">
                                {tool.label}
                            </div>
                        </div>
                        <Icon name="arrow-right" className="w-5 h-5" />
                    </Card>
                ))}
            </div>
        </div>
    )
}
