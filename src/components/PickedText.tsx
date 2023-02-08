interface PickedTextProps{
    text: string
}

export function PickedText({text}: PickedTextProps){
    return(
        <div>
            <span className="text-white font-[700] lg:text-3xl lg:font-[600] hd:text-5xl hd:font-[600]">{text}</span>
        </div>
    )
}