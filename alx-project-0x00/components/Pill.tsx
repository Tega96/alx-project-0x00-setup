import { PillProps } from "@/interfaces"

const Pill: React.FC<PillProps> = ({ title }) => {
    return (
        <div>
            <div className="flex justify-center items-center bg-[#f9f9f9] px-3 w-auto h-[27px] rounded-lg">
                <p className="text-sm">{title}</p>
            </div>
        </div>
    )
}
export default Pill