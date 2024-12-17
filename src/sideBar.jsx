import Button from "./buttons"
export default function SideMenu(){
    
    return(
        <div className="w-48 justify-center border-4 border-cyan-400 p-4 text-center mt-4 rounded-lg">
            <Button><h1>Hello</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s" alt="images" />
            </Button>
            <Button><h1>Hi</h1></Button>
            <Button/>
            
        </div>
    )
}