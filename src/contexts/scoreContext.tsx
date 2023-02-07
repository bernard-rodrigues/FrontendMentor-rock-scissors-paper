import { useContext, createContext, useState, ReactNode, useEffect } from 'react'

interface ScoreContextData{
    score: number,
    handleScore: (amount: number) => void
}

export const ScoreContext = createContext({} as ScoreContextData);

interface ScoreContextProviderProps{
    children: ReactNode;
} 

export function ScoreContextProvider(props: ScoreContextProviderProps){
    const [ score, setScore ] = useState<number>(0)

    function handleScore(amount: number){
        setScore(currentAmount => currentAmount + amount)
    }

    return(
        <ScoreContext.Provider
            value={{
                score,
                handleScore
            }}
        >
            {props.children}
        </ScoreContext.Provider>
    )
}

export const useScore = () => {
    return useContext(ScoreContext)
}