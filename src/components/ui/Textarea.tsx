import type { TextareaHTMLAttributes } from "react"

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {

}

const Textarea = ({...rest}: IProps) => {
    return(
        <textarea className="border-[1px] ml-28 border-gray-300 shadow-md focus:border-[#149eca] focus:outline-none focus:ring-1 focus:ring-[#149eca]" rows={6} {...rest}/>
    )
}

export default Textarea