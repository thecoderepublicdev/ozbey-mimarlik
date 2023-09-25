import { createContext, createElement, Fragment } from "react";
import { Popover } from '@headlessui/react'
import classNames from 'classnames';

const DropdownContext = createContext(null);

function Trigger({children}) {
    return <Popover.Button as={Fragment}>
        {({open}) => (
            <button
                className={classNames(
                    'block relative uppercase text-black/50 transition-all ease-in-out border-none p-9 hover:bg-gradient-to-b from-[#F5C16C]/20 to-transparent outline-none focus:outline-none',
                    open && 'text-[#AA530E] bg-gradient-to-b from-[#F5C16C]/20 to-transparent'
                )}
            >{children}</button>
        )}
    </Popover.Button>
}

function Content({children}) {
    return(
        <Popover.Panel as="div" className="animate__animated animate__fadeIn transform transition-all ease-in-out p-4 absolute min-w-[300px] mt-2 shadow-md bg-white">
            {children}
        </Popover.Panel>
    )
}

export default function Dropdown({children}) {
    return(
        <DropdownContext.Provider value={null}>
            <Popover>
                {children[0]}
                {children[1]}
            </Popover>
        </DropdownContext.Provider>
    )
}

Dropdown.Trigger = Trigger;
Dropdown.Content = Content;