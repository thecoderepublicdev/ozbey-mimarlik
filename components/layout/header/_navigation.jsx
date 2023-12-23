import Dropdown from "@components/shared/Dropdown";
import NavigationMenuData from "@data/Navigation";
import classNames from "classnames";
import Link from "next/link";
import { useHeader } from ".";


export default function Navigation() {
    const { variant } = useHeader();
    
    const CLASS_LIST = {
        NAVIGATION_ITEMS: classNames(
            'block p-4 outline-none relative after:absolute after:content-[""] after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:rounded-full after:transition-all after:w-0 after:h-1 hover:after:w-[40px]', {
                "text-black/50 hover:text-black after:bg-black ": variant === 'default',
                "text-white hover:text-white after:bg-white": variant === 'transparent',
            }
        ),
        NAVIGATION_CONTAINER: classNames(
            "block overflow-hidden", {
                'backdrop-blur-md px-6 rounded-full': variant === 'transparent'
            }
        )
    }
    
    return(
        <nav id="nav" role="navigation" className={CLASS_LIST.NAVIGATION_CONTAINER}>
            <ul className="flex gap-4 m-0 p-0 justify-between">
                {NavigationMenuData.map((item, index) => (
                    <li key={index}>
                        {item.isChildExists ? (
                            <Dropdown>
                                <Dropdown.Trigger className={CLASS_LIST.NAVIGATION_ITEMS}>
                                    {item.title}
                                </Dropdown.Trigger>

                                <Dropdown.Content>
                                    <item.children/>
                                </Dropdown.Content>
                            </Dropdown>
                        ) : (
                            <Link 
                                className={CLASS_LIST.NAVIGATION_ITEMS} 
                                href={item.path}
                            >
                                {item.title}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    )
}