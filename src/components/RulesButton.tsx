import rules from "../assets/images/image-rules.svg"
// import { Fragment, useState } from "react";
import { X } from "phosphor-react"
import * as Dialog from '@radix-ui/react-dialog';

export function RulesButton(){
    // const [ modalIsOpen, setModalIsOpen ] = useState(false);

    // function toggleModal(){
    //     setModalIsOpen(currentModalIsOpen => !currentModalIsOpen)
    // }
    
    return(
        <>
                      
            <Dialog.Root>
                <Dialog.Trigger type="button" className="border lg:border-2 border-headerOutline rounded-lg lg:rounded-xl w-1/3 lg:self-end lg:w-36 py-2 lg:px-4 mb-6 lg:mb-0 lg:mr-8">
                    <span className="text-white lg:text-lg font-[600]">RULES</span>
                </Dialog.Trigger>
                
                <Dialog.Portal>
                    <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0"/>
                    <Dialog.Content className={`
                        absolute w-screen h-screen p-14 flex flex-col justify-between items-center gap-12 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
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

            
            {/* <Transition
                show={modalIsOpen}
                enter="transition duration-100 ease-out"
                enterFrom="transform opacity-0"
                enterTo="transform opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform opacity-100"
                leaveTo="transform opacity-0"
                as={Fragment}
            >
                <Dialog className="relative z-50" onClose={() => setModalIsOpen(false)}>
                    <div className="fixed inset-0 flex items-center justify-center">
                        <Dialog.Panel className="w-screen h-screen lg:w-96 lg:h-96 py-14 bg-white flex flex-col items-center justify-between">
                            <Dialog.Title>
                                <p className="text-4xl font-barlow font-[700] text-darkText pt-8">RULES</p>
                            </Dialog.Title>
                            
                            <Dialog.Description>
                                <img src={rules} alt="Paper beats rock, rock beats scissors, scissors beats paper" />
                            </Dialog.Description>

                            <button onClick={() => setModalIsOpen(false)}>
                                <X color="#aaaaaa" weight="bold" size={28} />
                            </button>
                        </Dialog.Panel>
                    </div>
                </Dialog>
            </Transition> */}
        </>
    )
}




    
    