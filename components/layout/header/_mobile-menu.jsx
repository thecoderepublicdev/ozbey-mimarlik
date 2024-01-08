import { Menu } from "@headlessui/react";
import Logo from "@components/Logo";

export default function MobileMenu() {
    return(
        <div className="flex justify-between lg:hidden static p-4 z-10">
            <Logo/>

            <Menu>
                <Menu.Button>
                    {({open}) => (
                        <span className="material-symbols-outlined">
                            {open ? 'close' : 'menu'}
                        </span>
                    )}
                </Menu.Button>

                <Menu.Items as="div" className="absolute top-0 z-10 p-4 bg-white w-full h-fit">
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