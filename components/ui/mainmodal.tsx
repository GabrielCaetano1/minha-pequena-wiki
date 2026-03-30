import LetterGlitch from "./letterglitch"

export function MainModal() {
    return (
        <div className="relative grid grid-cols-2 justify-items-center place-items-center h-140 w-full overflow-hidden bg-principal opacity-90">
            <button className="relative m-1 w-50 h-50 p1 justify-center cursor-pointer bg-principal rounded-xl ">
                <img src="/python_logo.svg" alt="Python Logo" className="absolute inset-0 m-auto w-40 h-40" />
                <span className="relative z-10 text-white font-bold text-lg drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)]">Python</span>
            </button>

            <button className="relative m-1 w-50 h-50 p1 justify-center cursor-pointer bg-principal rounded-xl">
                <img src="/javascript_icon.svg" alt="JavaScript Logo" className="absolute inset-0 m-auto w-40 h-40" />
                <span className="relative z-10 text-white font-bold text-lg drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)]">JavaScript</span>
            </button>

            <button className="relative m-1 w-50 h-50 p1 justify-center cursor-pointer bg-principal rounded-xl">
                <img src="/sql_icon.svg" alt="SQL Logo" className="absolute inset-0 m-auto w-40 h-40" />
                <span className="relative z-10 text-white font-bold text-lg drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)]">SQL</span>
            </button>

            <button className="m-1 w-50 h-50 p1 justify-center cursor-pointer bg-principal rounded-xl">
                <span className="relative z-10 text-white font-bold text-lg drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)]">Placeholder</span>
            </button>
        </div>
    )
}