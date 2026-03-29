
export function Navbar() {
    return (
        <div className="bg-black text-white flex p-4 justify-between items-center ">
            <h1 className="text-xl font-bold flex"> Meu Dicionário de linguagens</h1>
            <div className="p-2 m-2 flex border-1 justify-evenly">
                <button className="m-1 gap-1 cursor-pointer">Github</button>
                <button className="m-1 cursor-pointer">Linkedin</button>
            </div>
        </div>
    );
}