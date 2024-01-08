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
    }, [])

    return(
        <Head>
            <title>{currentPage?.title}</title>
            <meta name="description" content={currentPage?.description}/>
            <meta name="tags" content={currentPage?.tags}/>
        </Head>
    )
}