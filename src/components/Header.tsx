import logo from "../assets/images/logo.svg"
import { useScore } from "../contexts/scoreContext"

export function Header(){
    const { score } = useScore()
    
    return(
        <div className="border-[3px] border-headerOutline rounded-lg p-3 flex justify-between w-[300px]">
            <img className="w-28 p-3" src={logo} alt="Logo written Rock Paper Scissors"/>
            <div className="py-2 px-6 rounded flex flex-col items-center justify-center bg-white">
                <span className="text-xs font-[600] text-scoreText">SCORE</span>
                <span className="text-4xl font-[700] text-darkText">{score}</span>
            </div>
        </div>
    )
}