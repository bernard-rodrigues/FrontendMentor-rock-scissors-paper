import logo from "../assets/images/logo.svg"
import { useScore } from "../contexts/scoreContext"

export function Header(){
    const { score } = useScore()
    
    return(
        <div className="border-[3px] border-headerOutline rounded-lg p-3 lg:py-2 flex justify-between w-[290px] lg:w-[820px] lg:rounded-2xl">
            <img className="w-28 p-3 lg:w-56 lg:p-5" src={logo} alt="Logo written Rock Paper Scissors"/>
            <div className="py-2 px-6 lg:mx-4 lg:my-3 rounded lg:rounded-lg flex flex-col items-center justify-center bg-white">
                <span className="text-xs lg:text-lg lg:px-9 font-[600] text-scoreText">SCORE</span>
                <span className="text-4xl lg:text-7xl font-[700] text-darkText">{score}</span>
            </div>
        </div>
    )
}