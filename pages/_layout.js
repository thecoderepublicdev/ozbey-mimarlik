import Header from "@components/layout/header"


export default function Layout({children}) {
    return(
        <main id="layout">
            <Header/>
                {children}
        </main>
    )
}