import Image from "next/image";
import Link from "next/link";


export default function Logo() {
    return(
        <picture id="logo" className="w-[300px] overflow-hidden">
            <Link href="/" className="animate__animated animate__fadeIn">
                <Image
                    src={require('../assets/logos/ozbey-konsept-logo.png')}
                    className="w-full h-auto"
                    alt="logo"
                    priority="high"
                />
            </Link>
        </picture>
    )
}