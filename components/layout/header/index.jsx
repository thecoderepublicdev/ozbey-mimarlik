import Logo from "@components/Logo";
import Navigation from "./_navigation";
import OfferButton from "./_offer-button";
import { useState } from "react";
import MobileMenu from "./_mobile-menu";

export default function Header() {
    const [isMobileMenuOpen, setMobileMenuStatus] = useState(false);
    return(
        <header id="header" className="bg-white block relative transition-all ease-in-out pl-2 p-6 lg:p-0 lg:pl-[60px] m-0">
            <div className="hidden lg:flex justify-between items-center m-0 p-0">
                <Logo/>
                <Navigation/>
                <OfferButton/>
            </div>
            <MobileMenu/>
        </header>
    )
}