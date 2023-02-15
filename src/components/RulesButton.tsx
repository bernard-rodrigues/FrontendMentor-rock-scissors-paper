import rules from "../assets/images/image-rules.svg"
// import { Fragment, useState } from "react";
import { X } from "phosphor-react"
import * as Dialog from '@radix-ui/react-dialog';

export function RulesButton(){
    return(
        <>
                      
            <Dialog.Root>
                <Dialog.Trigger 
                    type="button" 
                    className={`
                        absolute border-2 border-headerOutline rounded-lg w-[130px] bottom-[56px]
                        lg:border-2  lg:rounded-xl h-[43px] lg:self-end lg:w-36 lg:px-4 lg:mb-0 lg:mr-8`}>
                    <span className="text-white text-[18px] lg:text-lg font-[600]">RULES</span>
                </Dialog.Trigger>
                
                <Dialog.Portal>
                    <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0"/>
                    <Dialog.Content className={`
                        absolute w-screen h-screen p-14 flex flex-col justify-between items-center gap-12 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50
                        lg:flex-row lg:flex-wrap lg:max-w-md lg:h-fit lg:rounded-lg lg:p-8`}
                    >
                        
                        <Dialog.Title className="text-4xl mt-6 font-barlow font-[700] text-darkText">
                            RULES
                        </Dialog.Title>
                        
                        <Dialog.Close className="text-zinc-400 hover:text-zinc-600 order-3 mb-12 lg:mb-0 lg:order-2">
                            <X size={24} aria-label="Fechar"/>
                        </Dialog.Close>
                        
                        <img src={rules} className="p-3 m-auto order-2 lg:order-3" alt="Paper beats rock, rock beats scissors, scissors beats paper" />
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </>
    )
}




    
    