import paper from '../assets/images/icon-paper.svg'
import rock from '../assets/images/icon-rock.svg'
import scissors from '../assets/images/icon-scissors.svg'
import triangle from '../assets/images/bg-triangle.svg'
import { Icon } from './Icon'
import { colors } from '../utils/constants'
import { useEffect, useState } from 'react'
import { useScore } from '../contexts/scoreContext'
import { BackShadow } from './BackShadow'
import { WinnerBright } from './WinnerBright'
import { PickedText } from './PickedText'

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

    const { score, handleScore, updateScore } = useScore()

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

    useEffect(() => {
        if(localStorage.getItem("storedData")){
            const data = JSON.parse(localStorage.getItem("storedData")!)
            console.log(data)
            updateScore(data.score)
        }
    }, [])

    return(
        <>
            {chosen && housePick ?
            <>
                {/* RESULTS */}
                <div className="w-[300px] lg:w-[1024px] hd:w-[1366px] gap-y-[5rem] flex justify-between flex-wrap lg:flex-nowrap">
                    <div className="relative flex flex-col lg:flex-col-reverse items-center gap-5 lg:gap-12 hd:gap-16 lg:order-1 lg:animate-moveFromRight">
                        <div className="animate-result1 z-20">
                            <Icon
                                key={chosen.name}
                                icon={chosen.iconUrl} 
                                primaryColor={chosen.primaryColor} 
                                secondaryColor={chosen.secondaryColor}
                                alt={chosen.name}
                                onMatch={onMatch}
                            />
                        </div>
                        
                        <BackShadow />

                        {message === "YOU WIN" ? 
                        <WinnerBright />
                        :
                        <></>
                        }
                        
                        <PickedText text="YOU PICKED" />

                    </div>

                    <div className="relative flex flex-col lg:flex-col-reverse items-center gap-5 lg:gap-12 hd:gap-16 lg:order-3 lg:animate-moveFromLeft">
                        <div className="animate-result2 z-20">
                            <Icon
                                key={housePick.name}
                                icon={housePick.iconUrl} 
                                primaryColor={housePick.primaryColor} 
                                secondaryColor={housePick.secondaryColor}
                                alt={housePick.name}
                                onMatch={onMatch}
                            />

                        </div>

                        <BackShadow />

                        {message === "YOU LOSE" ? 
                        <WinnerBright />
                        :
                        <></>
                        }

                        <PickedText text="THE HOUSE PICKED" />
                    </div>
                    
                    <div className="flex flex-col m-auto gap-7 animate-result3 lg:order-2">
                        <span className={`
                            font-barlow text-white text-6xl font-[700]
                            hd:text-7xl
                            `}>
                            {message}
                        </span>
                        <button 
                            className="text-xl hd:text-2xl font-[600] text-backgroundGradientFrom font-barlow border bg-white rounded-lg py-2 hd:py-4 lg:hover:text-rockGradientTo"
                            onClick={reset}
                        >
                            PLAY AGAIN
                        </button>
                    </div>
                </div>

            </>
            :
            <div className={`
                flex flex-wrap justify-between items-center w-[300px] h-[260px] bg-mycenter bg-center bg-no-repeat
                lg:w-[440px] lg:h-[381px]
                hd:w-[570px] hd:h-[494px]`} style={{backgroundImage: `url(${triangle})`}}>
                {choices.map(choice => (
                    <Icon
                        key={choice.name}
                        icon={choice.iconUrl} 
                        primaryColor={choice.primaryColor} 
                        secondaryColor={choice.secondaryColor}
                        alt={choice.name}
                        onClick={() => handleIconChoice(choice)}
                        onMatch={onMatch}
                    />
                ))}
            </div>
            }
        </>
    )
}