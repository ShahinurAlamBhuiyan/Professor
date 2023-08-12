import { cn } from "@/lib/utils";
import Icon from "./ui/Icon";

interface HeadingProps {
    title: string;
    description: string;
    iconName: any;
    iconColor?: string;
    bgColor?: string;
}

const Heading = ({
    title, description, iconName, iconColor, bgColor
}: HeadingProps) => {
    return (
        <div className=" px-4 lg:px-8 flex items-center gap-x-3 mb-8">
            <div className={cn(" p-2 w-fit rounded-md", bgColor)}>
                <Icon name={iconName} className={cn("w-10 h-10", iconColor)} />
            </div>
            <div className="">
                <h2 className=" text-3xl font-bold">
                    {title}
                </h2>
                <p className="text-sm text-muted-foreground">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Heading