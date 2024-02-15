import SEO from "@data/SEO";
import Head  from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function SearchEngineOptimization() {
    const router = useRouter();
    const slug = router.asPath;
    const [currentPage, setCurrentPage] = useState();

    useEffect(() => {
        setCurrentPage(prev => {
            return SEO.find(page => page.slug === slug)
        })
    }, [slug])

    return(
        <Head>
            <title>{currentPage?.title}</title>
            <meta name="description" content={currentPage?.description}/>
            <meta name="tags" content={currentPage?.tags}/>
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.webp"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.webp"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.webp"/>
            <link rel="manifest" href="/favicon/site.webmanifest"/>
            <link rel="mask-icon" href="/favicon/safari-pinned-tab.webp" color="#ffffff"/>
            <meta name="apple-mobile-web-app-title" content="Snippit"/>
            <meta name="application-name" content="Özbey İnşaat & Mimarlık"/>
            <meta name="msapplication-TileColor" content="#ffffff"/>
            <meta name="theme-color" content="#ffffff"/>
        </Head>
    )
}