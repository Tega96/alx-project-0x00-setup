import Button from "@/components/Button";
import Card from "@/components/Card";


const Landing: React.FC = () => {
    return (
        <div>
            <h1 className="text-xl font-extralight">Landing page</h1>
            <Card />
            <Button 
                title="Get Started"
                size="sm"
                shape="sm"
            />
            <Button 
                title="Another buttton here"
                size="md"
                shape="md"
            />
            <Button 
                title="Final button"
                size="lg"
                shape="full"
            />
        </div>
    )
}
export default Landing;