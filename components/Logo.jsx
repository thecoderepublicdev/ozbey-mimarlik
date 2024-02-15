import Link from "next/link";

export default function Logo() {
    return(
        <picture id="logo" className="w-[300px] overflow-hidden">
            <Link href="/" className="animate__animated animate__fadeIn">
                <img
                    src="/assets/images/logo.webp"
                    className="w-[60%] h-auto"
                    alt="logo"
                    priority="high"
                />
            </Link>
        </picture>
    )
}