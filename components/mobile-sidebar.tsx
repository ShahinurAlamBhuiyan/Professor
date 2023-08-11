'use client'

import Icon from "@/components/ui/Icon"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Sidebar from "@/components/sidebar"


const MobileSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Button variant='ghost' size='icon' className=' md:hidden'>
                    <Icon name='menu' />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
                <Sidebar />
            </SheetContent>
        </Sheet>
    )
}

export default MobileSidebar