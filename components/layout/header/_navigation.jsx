import Dropdown from "@components/shared/Dropdown";
import NavigationMenuData from "@data/Navigation";
import classNames from "classnames";
import Link from "next/link";


export default function Navigation() {
    const className = classNames(
        'block p-4 text-black/50 outline-none hover:text-black relative after:absolute after:content-[""] after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:transition-all after:w-0 after:bg-black after:h-1 hover:after:w-[40px]'
    )
    return(
        <nav id="nav" role="navigation" className="m-0 p-0">
            <ul className="flex gap-4 m-0 p-0 justify-between">
                {NavigationMenuData.map((item, index) => (
                    <li key={index}>
                        {item.isChildExists ? (
                            <Dropdown>
                                <Dropdown.Trigger className={className}>
                                    {item.title}
                                </Dropdown.Trigger>

                                <Dropdown.Content>
                                    <item.children/>
                                </Dropdown.Content>
                            </Dropdown>
                        ) : (
                            <Link 
                                className={className} 
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