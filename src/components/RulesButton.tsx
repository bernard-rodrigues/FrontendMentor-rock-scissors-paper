import rules from "../assets/images/image-rules.svg"
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { X } from "phosphor-react"

export function RulesButton(){
    const [ modalIsOpen, setModalIsOpen ] = useState(false);

    function toggleModal(){
        setModalIsOpen(currentModalIsOpen => !currentModalIsOpen)
    }
    
    return(
        <>
            <button className="border lg:border-2 border-headerOutline rounded-lg lg:rounded-xl w-1/3 self-end lg:w-36 py-2 lg:px-4 mb-6 lg:mb-0 lg:mr-8" onClick={toggleModal}>
                <span className="text-white lg:text-lg font-[600]">RULES</span>
            </button>
            
            <Transition
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
                        <Dialog.Panel className="w-screen h-screen py-14 bg-white flex flex-col items-center justify-between">
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
            </Transition>
        </>
    )
}




    
    