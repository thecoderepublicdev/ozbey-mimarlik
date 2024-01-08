import { Menu } from "@headlessui/react";
import Logo from "@components/Logo";
import NavigationMenuData from "@data/Navigation";
import Link from "next/link";
import classNames from "classnames";
import { useHeader } from ".";

export default function MobileMenu() {
    const { variant } = useHeader();

    const CLASS_LIST = {
        MOBILEMENU_CONTAINER: classNames(
            "absolute top-full left-0 z-50 px-6 py-10 shadow w-full h-fit border-t border-t-gray-100", {
                'bg-white': variant === 'default',
                'backdrop-blur-md': variant === 'transparent'
            }
        )
    }
    return(
        <div className="flex justify-between xl:hidden relative p-4 z-50">
            <Logo/>

            <Menu>
                <Menu.Button>
                    {({open}) => (
                        <span className="material-symbols-outlined">
                            {open ? 'close' : 'menu'}
                        </span>
                    )}
                </Menu.Button>

                <Menu.Items as="div" className={CLASS_LIST.MOBILEMENU_CONTAINER}>
                    <ul className="*:text-xl grid gap-4">
                        {NavigationMenuData.map((item,index) => (
                            <li key={index}>
                                <Link href={item.path}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul> 
                </Menu.Items>
            </Menu>
        </div>
    )
}