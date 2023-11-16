import Logo from "@components/Logo";
import Navigation from "./_navigation";
import OfferButton from "./_offer-button";
import { createContext, useContext, useState } from "react";
import MobileMenu from "./_mobile-menu";
import classNames from "classnames";
import { useRouter } from "next/router";


const HeaderContext = createContext(null);

export const useHeader = () => {
    return useContext(HeaderContext)
};

export default function Header({variant = "default"}) {
    const [isMobileMenuOpen, setMobileMenuStatus] = useState(false);
    const router = useRouter();
    
    const ProviderValues = {
        currentPagePath: router.asPath
    }
    
    const Props = {
        Header: {
            className: classNames(
                {
                    "w-full sticky top-0 bg-white/50 backdrop-blur-md z-10": true
                }
            )
        },
        HeaderInner: {
            className: "hidden lg:flex justify-between items-center px-4 py-2"
        }
    }

    return(
        <HeaderContext.Provider value={{variant: variant}}>
            <header {...Props.Header}>
                <div {...Props.HeaderInner}>
                    <Logo/>
                    <Navigation/>
                    <OfferButton/>
                </div>
                <MobileMenu/>
            </header>
        </HeaderContext.Provider>
    )
}