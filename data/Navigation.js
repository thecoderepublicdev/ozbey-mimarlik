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
                    <Link href="#" className="text-gray-300 block p-4 w-full ">
                        Proje 1
                    </Link>
                </li>
                <li>
                    <Link href="#" className="text-gray-300 block p-4 w-full">
                        Proje 2
                    </Link>
                </li>
                <li>
                    <Link href="#" className="text-gray-300 block p-4 w-full">
                        Proje 3
                    </Link>
                </li>
                <li>
                    <Link href="/projeler/4" className="text-gray-300 block p-4 w-full">
                        Proje 4
                    </Link>
                </li>
                <li>
                    <Link href="#" className="text-gray-300 block p-4 w-full">
                        Proje 5
                    </Link>
                </li>
            </ul>
        ),
        path: '/projelerimiz',
        title: "Projelerimiz"
    },
    {
        path: '/hizmetlerimiz/kentsel-donusum',
        title: "Kentsel Dönüşüm"
    },
    {
        path: '/iletisim',
        title: "İletişim"
    },
];

export default NavigationMenuData;