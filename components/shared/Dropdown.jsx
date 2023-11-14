import { createContext, Fragment } from "react";
import { Popover } from '@headlessui/react'
import classNames from 'classnames';

const DropdownContext = createContext(null);

function Trigger({className, children}) {
    return <Popover.Button as={Fragment}>
        {({open}) => (
            <button
                className={className}
            >{children}</button>
        )}
    </Popover.Button>
}

function Content({children}) {
    return(
        <Popover.Panel as="div" className="z-50 transform transition-all ease-in-out p-4 absolute min-w-[300px] mt-2 shadow-md bg-white/50 backdrop-blur-md">
            {children}
        </Popover.Panel>
    )
}

export default function Dropdown({children}) {
    return(
        <DropdownContext.Provider value={null}>
            <Popover className="relative">
                {children[0]}
                {children[1]}
            </Popover>
        </DropdownContext.Provider>
    )
}

Dropdown.Trigger = Trigger;
Dropdown.Content = Content;