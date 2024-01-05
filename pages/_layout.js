import Header from "@components/layout/header"
import Footer from "@components/layout/footer"
import { useRouter } from "next/router"


export default function Layout({showLoading, children}) {
    const router = useRouter();

    return(
        <main id="layout">
            {showLoading ? (
                <h1>Yükleniyor</h1>
            ) : (
                <>
                    <Header variant={'default'}/>
                        {children}
                    <Footer/>
                </>
            )}
        </main>
    )
}