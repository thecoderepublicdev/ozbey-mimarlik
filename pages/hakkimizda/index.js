import { NextSeo } from "next-seo";
import Layout from "../_layout";
import Masthead from "@about-us/Masthead";
import Information from "@components/layout/about-us/Information";

export default function AboutUs() {
    const SearchEngineOptimization = {
        title: 'Hakkımızda | Özbey İnşaat & Mimarlık',
        descripton: 'Gerek kentsel dönüşüm projesi olarak gerekse kat karşılığı yaptığımız tüm projelerimizde öncelik olarak sizin hayallerinizi gerçekleştirmek için buradayız.'
    }

    return(
        <Layout>
            <NextSeo {...SearchEngineOptimization}/>
            <Masthead/>
            <Information/>
        </Layout>
    )
}