
export function Navbar() {
    return (
        <div className="bg-principal text-white flex m-2 p-1 justify-between items-center rounded-xl">
            <h1 className="text-xl text-principal2 font-bold flex p-5 gap-1"> 
                Meu Dicionário <span className="text-principal3">Dev</span> 
            </h1>
            <div className="p-2 m-2 gap-4 flex justify-between items-center">
                {/* <div className="border">
                    <label htmlFor="searchbar">CTRL + K</label>
                    <input type="text" id="searchbar" />
                </div> */}
                <a href="" className="m1 w-10 h-10 cursor-pointer">
                    <img src="/github_icon_white.svg" alt="Github" />
                </a>
                <a href="" className="m1 w-10 h-10 cursor-pointer">
                    <img src="/linkedin_icon.svg" alt="Linkedin" />
                </a>
            </div>
        </div>
    );
}