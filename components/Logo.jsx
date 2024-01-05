import Image from "next/image";
import Link from "next/link";
import { useHeader } from "./layout/header";


export default function Logo() {
    const {variant} = useHeader()

    return(
        <picture id="logo" className="w-[300px] overflow-hidden">
            <Link href="/" className="animate__animated animate__fadeIn">
                <img
                    src="/assets/images/logo.png"
                    className="w-[60%] h-auto"
                    alt="logo"
                    priority="high"
                />
            </Link>
        </picture>
    )
}