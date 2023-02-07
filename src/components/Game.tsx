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
                setMessage("IT'S A TIE!")
            }else if(
                (chosen.name === "paper" && housePick.name === "rock") ||
                (chosen.name === "rock" && housePick.name === "scissors") ||
                (chosen.name === "scissors" && housePick.name === "paper")
            ){
                setTimeout(() => {
                    handleScore(1)
                }, 3500)
                setMessage("YOU WIN")
            }else{
                setTimeout(() => {
                    handleScore(-1)
                }, 3500)
                setMessage("YOU LOSE")
            }
        }
        return
    }, [onMatch])

    return(
        <>
            {chosen && housePick ?
            <>
                {/* RESULTS */}
                <div className="w-[300px] flex justify-between">
                    <div className="relative flex flex-col items-center gap-5">
                        <div className="animate-result1 z-20">
                            <Icon
                                key={chosen.name}
                                icon={chosen.iconUrl} 
                                primaryColor={chosen.primaryColor} 
                                secondaryColor={chosen.secondaryColor}
                                alt={chosen.name}
                            />

                        </div>
                        
                        <div className="absolute rounded-full top-4 left-4 w-24 h-24 bg-black opacity-10" />

                        {message === "YOU WIN" ? 
                        <div 
                            className="absolute rounded-full -top-[4rem] w-64 h-64 opacity-10 animate-result4"
                            style={{
                                background: `
                                    radial-gradient(
                                    rgba(255, 255, 255) 43%, 
                                    rgba(220, 220, 220) 43%, 
                                    rgba(220, 220, 220) 55%,
                                    rgba(180, 180, 180) 55%    
                                )`
                            }}
                        />
                        :
                        <></>
                        }
                        
                        <div>
                            <span className="text-white font-[700]">YOU PICKED</span>
                        </div>

                    </div>

                    <div className="relative flex flex-col items-center gap-5">
                        <div className="animate-result2 z-20">
                            <Icon
                                key={housePick.name}
                                icon={housePick.iconUrl} 
                                primaryColor={housePick.primaryColor} 
                                secondaryColor={housePick.secondaryColor}
                                alt={housePick.name}
                            />

                        </div>

                        <div className="absolute rounded-full top-4 left-4 w-24 h-24 bg-black opacity-10" />

                        {message === "YOU LOSE" ? 
                        <div 
                            className="absolute rounded-full -top-[4rem] w-64 h-64 opacity-10 animate-result4"
                            style={{
                                background: `
                                    radial-gradient(
                                    rgba(255, 255, 255) 43%, 
                                    rgba(220, 220, 220) 43%, 
                                    rgba(220, 220, 220) 55%,
                                    rgba(180, 180, 180) 55%    
                                )`
                            }}
                        />
                        :
                        <></>
                        }

                        <div>
                            <span className="text-white font-[700]">THE HOUSE PICKED</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-7 animate-result3">
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