import Logo from "@components/Logo";
import Navigation from "./_navigation";
import OfferButton from "./_offer-button";
import { createContext, memo, useContext, useState } from "react";
import MobileMenu from "./_mobile-menu";
import classNames from "classnames";
import { useRouter } from "next/router";

const HeaderContext = createContext();

export const useHeader = () => {
    return useContext(HeaderContext)
};

function Header({variant}) {
    const [isMobileMenuOpen, setMobileMenuStatus] = useState(false);
    const router = useRouter();
    
    const ProviderValues = {
        currentPagePath: router.asPath,
        variant: variant,
    }

    const Props = {
        Header: {
            className: classNames(
                {
                    "w-full sticky top-0 bg-white xl:bg-white/50 xl:backdrop-blur-md z-[99999]": variant === 'default',
                    "absolute z-10 w-full text-white": variant === 'transparent'
                }
            )
        },
        HeaderInner: {
            className: "container max-w-screen-2xl mx-auto hidden xl:flex justify-between items-center px-4 py-2"
        }
    }

    return(
        <HeaderContext.Provider value={ProviderValues}>
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

export default memo(Header)