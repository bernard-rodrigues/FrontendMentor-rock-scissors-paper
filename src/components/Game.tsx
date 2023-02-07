import paper from '../assets/images/icon-paper.svg'
import rock from '../assets/images/icon-rock.svg'
import scissors from '../assets/images/icon-scissors.svg'
import triangle from '../assets/images/bg-triangle.svg'
import { Icon } from './Icon'
import { colors } from '../utils/constants'
import { useEffect, useState } from 'react'
import { useScore } from '../contexts/scoreContext'

export interface Choice{
    name: string,
    iconUrl: string,
    primaryColor: string,
    secondaryColor: string,
    position?: string
}

export function Game(){
    
    const choices: Choice[] = [
        {
            name: "paper",
            iconUrl: paper,
            primaryColor: colors.paperGradientTo,
            secondaryColor: colors.paperGradientFrom,
            position: 'topLeft'
        },
        {
            name: "scissors",
            iconUrl: scissors,
            primaryColor: colors.scissorsGradientTo,
            secondaryColor: colors.scissorsGradientFrom,
            position: "topRight"
        },
        {
            name: "rock",
            iconUrl: rock,
            primaryColor: colors.rockGradientTo,
            secondaryColor: colors.rockGradientFrom,
            position: "bottomCenter"
        }

    ]

    const [ chosen, setChosen ] = useState<Choice | null>(null)
    const [ housePick, setHousePick ] = useState<Choice | null>(null)
    const [ message, setMessage ] = useState("")
    const [ onMatch, setOnMatch ] = useState(false)

    const { handleScore } = useScore()

    function handleIconChoice(choice: Choice){
        setChosen(choice);
        setHousePick(choices[Math.floor(Math.random()*2)]);
        setOnMatch(true)
    }

    function reset(){
        setChosen(null)
        setHousePick(null)
        setOnMatch(false)
    }

    useEffect(() => {
        if(chosen && housePick){
            if(chosen.name === housePick.name){
                setMessage("It's a tie!")
            }else if(
                (chosen.name === "paper" && housePick.name === "rock") ||
                (chosen.name === "rock" && housePick.name === "scissors") ||
                (chosen.name === "scissors" && housePick.name === "paper")
            ){
                handleScore(1)
                setMessage("YOU WIN")
            }else{
                handleScore(-1)
                setMessage("YOU LOSE")
            }
        }
        return
    }, [onMatch])

    return(
        <>
            {chosen && housePick ?
            <>
                <div className="relative w-[300px] flex justify-between">
                    <div className="flex flex-col items-center gap-5">
                        <div>
                            <Icon
                                key={chosen.name}
                                icon={chosen.iconUrl} 
                                primaryColor={chosen.primaryColor} 
                                secondaryColor={chosen.secondaryColor}
                                alt={chosen.name}
                            />
                        </div>
                        <div>
                            <span className="text-white font-[700]">YOU PICKED</span>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-5">
                        <div>
                            <Icon
                                key={housePick.name}
                                icon={housePick.iconUrl} 
                                primaryColor={housePick.primaryColor} 
                                secondaryColor={housePick.secondaryColor}
                                alt={housePick.name}
                            />
                        </div>
                        <div>
                            <span className="text-white font-[700]">THE HOUSE PICKED</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-7">
                    <span className="font-barlow text-white text-6xl font-[700]">
                        {message}
                    </span>
                    <button 
                        className="text-xl font-[600] text-backgroundGradientFrom font-barlow border bg-white rounded-lg py-2"
                        onClick={reset}
                    >
                        PLAY AGAIN
                    </button>
                </div>
            </>
            :
            <div className="flex flex-wrap justify-center items-center gap-x-11 w-[300px] h-[300px] bg-mycenter bg-center bg-no-repeat" style={{backgroundImage: `url(${triangle})`}}>
                {choices.map(choice => (
                    <Icon
                        key={choice.name}
                        icon={choice.iconUrl} 
                        primaryColor={choice.primaryColor} 
                        secondaryColor={choice.secondaryColor}
                        alt={choice.name}
                        onClick={() => handleIconChoice(choice)}
                    />
                ))}
            </div>
            }
        </>
    )
}