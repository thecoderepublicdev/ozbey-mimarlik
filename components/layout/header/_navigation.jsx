import Dropdown from "@components/shared/Dropdown";
import NavigationMenuData from "@data/Navigation";
import Link from "next/link";


export default function Navigation() {
    return(
        <nav id="nav" role="navigation" className="m-0 p-0">
            <ul className="flex gap-4 m-0 p-0 animate__animated animate__fadeIn">
                {NavigationMenuData.map((item, index) => (
                    <li key={index}>
                        {item.isChildExists ? (
                            <Dropdown>
                                <Dropdown.Trigger>
                                    {item.title}
                                </Dropdown.Trigger>

                                <Dropdown.Content>
                                    <item.children/>
                                </Dropdown.Content>
                            </Dropdown>
                        ) : (
                            <Link 
                                className="block uppercase text-black/50 hover:text-[#AA530E] transition-all hover:transition-all ease-in-out p-9 hover:bg-gradient-to-b from-[#F5C16C]/20 to-transparent" href={item.path}>
                                {item.title}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    )
}