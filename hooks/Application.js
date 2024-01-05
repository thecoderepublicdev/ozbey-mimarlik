import { createContext, useContext } from "react"
import { DM_Sans } from "next/font/google";
import { useRouter } from "next/router";

const PrimaryFont = DM_Sans({subsets: ['latin']});
const ApplicationContext = createContext();

export function useApplication() {
    return useContext(ApplicationContext);
}

export default function ApplicationProvider({children}) {
    const ApplicationStore = {
        router: useRouter(),
        PrimaryFont: PrimaryFont.className
    }

    return(
        <ApplicationContext.Provider value={ApplicationStore}>
            {children}
        </ApplicationContext.Provider>
    )
}