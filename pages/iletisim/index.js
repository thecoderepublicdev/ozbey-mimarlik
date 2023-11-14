import classNames from "classnames";
import Layout from "../_layout";

export default function ContactPage() {
    const ElementClassList = {
        Masthead: classNames(
            'grid gap-4 min-h-[400px] place-items-center place-content-center'
        ),
        MastheadInner: classNames(
            'grid gap-4 place-items-center place-content-center'
        ),
        Title: classNames(
            'font-bold text-6xl'
        ),
        Description: classNames(
            'text-gray-500 text-lg'
        )
    }
    return(
        <Layout>
            <div className={ElementClassList.Masthead}>
                <div className={ElementClassList.MastheadInner}>
                    <h1 className={ElementClassList.Title}>Bizimle iletişime geçin</h1>
                    <p className={ElementClassList.Description}>Özbey İnşaat & Mimarlık olarak aklınıza takılan tüm sorulara yanıt vermeye hazırız</p>
                </div>
            </div>
        </Layout>
    )
}