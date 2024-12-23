import Button from "./buttons"

export default function SideMenu() {
    const buttons = [
        {
            id: 1,
            children: (
                <>
                    <h1>Hello</h1>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s" alt="images" />
                </>
            )
        },
        {
            id: 2,
            children: <h1>Hi</h1>
        }
    ];

    return (
        <div className="w-48 justify-center border-4 border-cyan-400 p-4 text-center mt-4 rounded-lg">
            {buttons.map((button) => (
                <Button key={button.id}>{button.children}</Button>
            ))}
        </div>
    );
}