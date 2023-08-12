'use client'

import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'
import Icon from './ui/Icon'
const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
    {
        label: "Dashboard",
        icon: <Icon name='layout' className="h-5 w-5 mr-3 text-sky-500" />,
        href: "/dashboard",
    },
    {
        label: "Conversation",
        icon: <Icon name='message-square' className="h-5 w-5 mr-3 text-violet-500" />,
        href: "/conversation",
    },
    {
        label: "Image Generation",
        icon: <Icon name='image' className="h-5 w-5 mr-3 text-pink-700" />,
        href: "/image",
    },
    {
        label: "Video Generation",
        icon: <Icon name='video' className="h-5 w-5 mr-3 text-orange-700" />,
        href: "/video",
    },
    {
        label: "Music Generation",
        icon: <Icon name='music' className="h-5 w-5 mr-3 text-emerald-700" />,
        href: "/music",
    },
    {
        label: "Code Generation",
        icon: <Icon name='code' className="h-5 w-5 mr-3 text-green-700" />,
        href: "/code",
    },
    {
        label: "Settings",
        icon: <Icon name='settings' className="h-5 w-5 mr-3" />,
        href: "/settings",
    },
];


const Sidebar = () => {
    const pathName = usePathname();
    return (
        <div className=' space-y-4 flex flex-col h-full bg-[#111827] text-white'>
            <div className=' px-3 py-2 flex-1'>
                <Link href='/dashboard' className=' flex items-center pl-3 mb-14'>
                    <div className=' relative w-8 h-8 mr-4'>
                        <Image
                            fill
                            alt='Logo'
                            src='/logo.png'
                        />
                    </div>
                    <h1 className={cn(`text-2xl font-bold`, montserrat.className)}>
                        Professor
                    </h1>
                </Link>
                <div className='space-y-1'>
                    {
                        routes.map((route) => (
                            <Link
                                className={cn('text-sm group flex p-3 w-full cursor-pointer justify-start font-medium hover:text-white hover:bg-white/10 rounded-lg transition',
                                    pathName === route.href ?
                                        "text-white bg-white/10" :
                                        "text-zinc-400"

                                )}
                                href={route.href}
                                key={route.href}
                            >
                                <div className=' flex items-center flex-1'>
                                    {route.icon}
                                    {route.label}
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Sidebar