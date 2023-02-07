import { ButtonHTMLAttributes } from "react"

interface IconProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    icon: string,
    primaryColor: string,
    secondaryColor: string,
    alt: string,
}

export function Icon({icon, primaryColor, secondaryColor, alt, ...rest}: IconProps){
    return(
        <button 
            className="w-32 h-32 rounded-full flex justify-center items-center"
            style={{
                backgroundImage: `radial-gradient(at center 45%, ${primaryColor} 66%, ${secondaryColor} 66%)`
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
                    className="h-[3.25rem] w-auto" src={icon} alt={alt}
                    style={
                        alt === "rock" ?
                        {transform: "scale(0.8)"}
                        :
                        {}
                    }
                />
            </div>
        </button>
    )
}