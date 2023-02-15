import { ButtonHTMLAttributes } from "react"

interface IconProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    icon: string,
    primaryColor: string,
    secondaryColor: string,
    alt: string,
    onMatch: boolean
}

export function Icon({icon, primaryColor, secondaryColor, alt, onMatch, ...rest}: IconProps){
    return(
        <>
            {!onMatch ? 
            
            <button 
                className={`
                    w-[134px] h-[134px] m-auto rounded-full flex justify-center items-center
                    lg:hover:brightness-110 lg:w-44 lg:h-44 
                `}
                style={{
                    backgroundImage: `radial-gradient(at center 45%, ${primaryColor} 66%, ${secondaryColor} 66%)`,
                }}
                {...rest}
            >
                <div 
                    className="w-3/4 h-3/4 flex justify-center items-center rounded-full overflow-hidden"
                    style={{
                        backgroundImage: `radial-gradient(at center 55%, white 66%, #dddddd 66%)`
                    }}                
                >
                    <img 
                        className="h-[3.25rem] lg:h-[4.25rem] hd:h-[7rem] w-auto" src={icon} alt={alt}
                        style={
                            alt === "rock" ?
                            {transform: "scale(0.8)"}
                            :
                            {}
                        }
                    />
                </div>
            </button>
            :
            <button 
                className="w-32 h-32 lg:w-72 lg:h-72 hd:h-[400px] hd:w-[400px] m-auto rounded-full flex justify-center items-center"
                style={{
                    backgroundImage: `radial-gradient(at center 45%, ${primaryColor} 66%, ${secondaryColor} 66%)`,
                }}
                {...rest}
            >
                <div 
                    className="w-3/4 h-3/4 flex justify-center items-center rounded-full overflow-hidden"
                    style={{
                        backgroundImage: `radial-gradient(at center 55%, white 66%, #dddddd 66%)`
                    }}                
                >
                    <img 
                        className="h-[3.25rem] lg:h-[4.25rem] hd:h-[7rem] w-auto" src={icon} alt={alt}
                        style={
                            alt === "rock" ?
                            {transform: "scale(0.8)"}
                            :
                            {}
                        }
                    />
                </div>
            </button>
            }    
        </>
    )
}