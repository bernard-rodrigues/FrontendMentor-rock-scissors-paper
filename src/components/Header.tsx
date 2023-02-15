import logo from "../assets/images/logo.svg"
import { useScore } from "../contexts/scoreContext"

export function Header(){
    const { score } = useScore()
    
    return(
        <header className={`
            border-[3px] border-headerOutline rounded-lg flex justify-between items-center w-[314px] h-[98px] pl-[21px] pr-[10px]
            lg:py-2 lg:w-[820px] lg:rounded-2xl
            `} >
            <img className="w-[85px] lg:w-56 hd:w-72 lg:p-5 hd:p-7" src={logo} alt="Logo written Rock Paper Scissors"/>
            <div className="relative h-[73px] w-[80px] lg:mx-4 lg:my-3 rounded lg:rounded-lg flex flex-col items-center justify-center bg-white">
                <span className="absolute top-[9px] text-[10px] lg:text-lg lg:px-9 font-[600] text-scoreText">SCORE</span>
                <span className="absolute bottom-[1px] text-[40px] lg:text-7xl font-[700] text-darkText">{score}</span>
            </div>
        </header>
    )
}