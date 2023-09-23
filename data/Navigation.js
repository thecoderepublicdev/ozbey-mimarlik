import Link from "next/link";

const NavigationMenuData = [
    {
        path: '/',
        title: "Ana Sayfa"
    },
    {
        path: '/hakkimizda',
        title: "Hakkımızda"
    },
    {
        isChildExists: true,
        children: () => (
            <ul>
                <li>
                    <Link href="#" className="block p-4 w-full bg-transparent hover:bg-red-500">
                        Proje 1
                    </Link>
                </li>
                <li>
                    <Link href="#" className="block p-4 w-full bg-transparent hover:bg-red-500">
                        Proje 2
                    </Link>
                </li>
                <li>
                    <Link href="#" className="block p-4 w-full bg-transparent hover:bg-red-500">
                        Proje 3
                    </Link>
                </li>
                <li>
                    <Link href="#" className="block p-4 w-full bg-transparent hover:bg-red-500">
                        Proje 4
                    </Link>
                </li>
                <li>
                    <Link href="#" className="block p-4 w-full bg-transparent hover:bg-red-500">
                        Proje 5
                    </Link>
                </li>
            </ul>
        ),
        path: '/projelerimiz',
        title: "Projelerimiz"
    },
    {
        path: '/kentsel-donusum',
        title: "Kentsel Dönüşüm"
    },
    {
        path: '/kentsel-donusum',
        title: "İletişim"
    },
];

export default NavigationMenuData;