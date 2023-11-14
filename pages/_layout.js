import Footer from "@components/layout/footer"
import Header from "@components/layout/header"


export default function Layout({children}) {
    return(
        <main id="layout">
            <Header variant="transparent"/>
                {children}
            <Footer/>
        </main>
    )
}