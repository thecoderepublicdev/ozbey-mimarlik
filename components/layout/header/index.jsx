import Logo from "@components/Logo";
import Navigation from "./_navigation";
import OfferButton from "./_offer-button";

export default function Header() {
    return(
        <header className="bg-white block relative transition-all ease-in-out px-[60px] border-b border-gray-200 m-0">
            <div className="flex justify-between items-center m-0 p-0">
                <Logo/>
                <Navigation/>
                <OfferButton/>
            </div>
        </header>
    )
}