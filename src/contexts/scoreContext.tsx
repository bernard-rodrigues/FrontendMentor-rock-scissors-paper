import { useContext, createContext, useState, ReactNode, useEffect } from 'react'

interface ScoreContextData{
    score: number,
    handleScore: (amount: number) => void,
    updateScore: (score: number) => void
}

export const ScoreContext = createContext({} as ScoreContextData);

interface ScoreContextProviderProps{
    children: ReactNode;
} 

export function ScoreContextProvider(props: ScoreContextProviderProps){
    const [ score, setScore ] = useState<number>(0)

    function handleScore(amount: number){
        const savedScore = {
            score: score + amount
        }
        localStorage.setItem("storedData", JSON.stringify(savedScore))
        setScore(currentAmount => currentAmount + amount)
    }

    function updateScore(score: number){
        setScore(score)
    }

    return(
        <ScoreContext.Provider
            value={{
                score,
                handleScore,
                updateScore
            }}
        >
            {props.children}
        </ScoreContext.Provider>
    )
}

export const useScore = () => {
    return useContext(ScoreContext)
}