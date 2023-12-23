import Header from "@components/layout/header"
import Footer from "@components/layout/footer"
import { useRouter } from "next/router"


export default function Layout({children}) {
    const router = useRouter();

    return(
        <main id="layout">
            <Header variant={router.asPath === '/' ? 'transparent' : 'default'}/>
                {children}
            <Footer/>
        </main>
    )
}