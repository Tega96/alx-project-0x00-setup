import { ButtonProps } from "@/interfaces"


const Button: React.FC<ButtonProps> = ({ size, shape, title }) => {

    return (
        <button className={`flex items-center justify-center border py-1 px-2 bg-blue-300 mt-4 rounded-${shape} text-${size}`} > { title }</button>
    )
}
export default Button



