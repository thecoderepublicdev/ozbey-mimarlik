import Header from "@components/layout/header"
import Footer from "@components/layout/footer"
import { useRouter } from "next/router"
import SearchEngineOptimization from "@hooks/SearchEngineOptimization";
import { GoogleTagManager } from '@next/third-parties/google'



export default function Layout({showLoading, children}) {
    const router = useRouter();

    return(
        <main id="layout">
            {showLoading ? (
                <h1>Yükleniyor</h1>
            ) : (
                <>
                    <Header variant={'default'}/>
                        <SearchEngineOptimization/>
                        <GoogleTagManager gtmId="GTM-5XCZ5448"/>
                        {children}
                    <Footer/>
                </>
            )}
        </main>
    )
}