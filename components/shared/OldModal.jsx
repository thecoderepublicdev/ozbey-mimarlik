import { Dialog, Transition } from '@headlessui/react'
import {Fragment, createContext, createElement, useContext, useState } from 'react';

const OldModalContext = createContext();

const useOldModal = () => useContext(OldModalContext);

function Button({children, ...props}) {
    const { setModalVisibility } = useOldModal();

    return createElement('button', {
        ...props,
        onClick: () => setModalVisibility(true),
    }, children);
}

function Title({children}) {
    return children
}

function Footer({children}) {
    return <div className="mt-4">{children}</div>
}

function Content({children}) {
    return children
}

export default function OldModal({children, ...props}) {
    const [isOpen, setIsOpen] = useState(false);

    const close = () => setIsOpen(false);
    const open = () => setIsOpen(true);
    const toggle = () => setIsOpen(!isOpen);

    const Props = {
        OverlayContainer: {
            as: Fragment,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
        },
        OverlayInner: {
            className: "fixed inset-0 bg-black bg-opacity-25"
        },
        ContentContainer: {
            enter: "ease-out duration-300",
            enterFrom: "opacity-0 scale-95",
            enterTo: "opacity-100 scale-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100 scale-100",
            leaveTo: "opacity-0 scale-95",
        },
        Dialog: {
            as: 'div',
            onClose: close,
            className: 'relative z-10'
        },
        DialogTitle: {
            as: "h3",
            className: "text-2xl font-large leading-6 text-gray-900 mb-4" 
        },
        DialogPanel: {
            className: "w-full min-w-md transform overflow-hidden bg-white text-left align-middle shadow-xl transition-all"
        }
    }

    const data = {
        isOpen,
        Props,
        setModalVisibility: setIsOpen,
        close,
        open,
        toggle
    }
    
    return(
        <OldModalContext.Provider value={data}>
            {children[0]}

            <Transition appear show={isOpen} as="div">
                <Dialog {...Props.Dialog}>
                    <Transition.Child {...Props.OverlayContainer}>
                        <div {...Props.OverlayInner}></div>
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center text-center">
                            <Transition.Child as={Fragment} {...Props.ContentContainer}>
                                <Dialog.Panel as="div" {...Props.DialogPanel}>
                                    {children[1]}
                                    {children[2]}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </OldModalContext.Provider>
    )
}

OldModal.Trigger = Button;
OldModal.Content = Content;
OldModal.Title = Title;
OldModal.Footer = Footer;