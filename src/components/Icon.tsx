interface IconProps{
    icon: string,
    from: string,
    to: string,
}

export function Icon(props: IconProps){
    return(
        <div 
                className="absolute top-0 left-0 w-32 h-32 rounded-full overflow-hidden"
                style={{
                    backgroundColor: props.from
                }}    
            >
                <div 
                    className="w-full h-full rounded-full flex justify-center items-center -translate-y-[5%]"
                    style={{
                        backgroundColor: props.to
                    }}    
                >

                    <div className="relative w-3/4 h-3/4 flex translate-y-[7%] justify-center items-center bg-zinc-200 rounded-full overflow-hidden">
                        <div className="absolute w-full h-full rounded-full bg-white translate-y-[5%]">
                            <img className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[55%] h-[3.25rem] w-auto" src={props.icon} alt=""/>
                        </div>
                    </div>

                    
                </div>
        </div>
    )
}