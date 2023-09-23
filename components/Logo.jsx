import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return(
        <picture className="w-[200px]">
            <Link href="/">
                <Image
                    src={require('../assets/images/logo.png')}
                    className="w-full h-auto"
                    alt="logo"
                    priority="high"
                />
            </Link>
        </picture>
    )
}