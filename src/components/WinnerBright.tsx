export function WinnerBright(){
    return(
        <div 
            className={`
                absolute rounded-full -top-[4rem] w-64 h-64 opacity-10 animate-result4 
                lg:-top-[6rem] lg:w-[40rem] lg:h-[40rem]
                hd:-top-[10.5rem] hd:w-[60rem] hd:h-[60rem] 
                `}
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
    )
}