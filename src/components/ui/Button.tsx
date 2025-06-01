import type { ButtonHTMLAttributes, ReactNode } from "react"

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    width?: "w-full" | "w-fit";
}

const Button = ({children, className, width ="w-full", ...rest}: IProps) => {
    return(
        <button className={`${className} ${width} rounded-lg text-white px-3 duration-200 font-medium bg-[#149eca] cursor-pointer `}>
            {children}
        </button>
    )
}

export default Button