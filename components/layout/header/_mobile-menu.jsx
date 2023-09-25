import { Menu } from "@headlessui/react";
import Logo from "@components/Logo";

export default function MobileMenu() {
    return(
        <div className="flex justify-between lg:hidden static">
            <Logo/>

            <Menu>
                <Menu.Button>
                    {({open}) => (
                        <span className="material-symbols-outlined">
                            {open ? 'close' : 'menu'}
                        </span>
                    )}
                </Menu.Button>

                <Menu.Items as="div" className="absolute top-0 bottom-0 left-0 right-0 z-10 bg-white w-full h-full">
                    <ul>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                    </ul>
                </Menu.Items>
            </Menu>
        </div>
    )
}