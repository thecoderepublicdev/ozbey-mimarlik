import Layout from "../_layout";
import IconBox from "@components/shared/IconBox";
import ContactForm from "../../forms/ContactForm";
import Title from "@components/shared/Title";

export default function ContactPage() {   
    const ElementClassList = {
        Masthead: 'grid gap-4 min-h-[400px] py-[150px] container mx-auto',
        MastheadInner: 'grid gap-4 place-content-start align-content-center mb-20',
        Title: 'font-semibold text-6xl',
        Description: 'text-gray-500 text-lg',
        Contact: 'grid grid-cols-2 gap-8',
        Box: 'p-4 border-b border-b-gray-200 flex flex-col gap-2 last:border-b-0'
    }

    return(
        <Layout>
            <div className={ElementClassList.Masthead}>
                <div className={ElementClassList.MastheadInner}>
                    <Title level="h1">Bizimle iletişime geçin</Title>
                    <p className={ElementClassList.Description}>Özbey İnşaat & Mimarlık olarak aklınıza takılan tüm sorulara yanıt vermeye hazırız</p>
                </div>
                <div className={ElementClassList.Contact}>
                    <ContactForm type="contact"/>
                    <div className="grid gap-4 container mx-auto max-w-screen-2xl">
                        <div className="grid gap-4">
                            <div className={ElementClassList.Box}>
                                <div className="flex items-center gap-4">
                                    <IconBox icon="location_on"/>
                                    <label className="text-xl inline font-bold">Ofisimiz</label>
                                </div>
                                <label className="text-md text-gray-500">Merkez, Ahmet Taner Kışlalı Caddesi & Fatih Sokağı Mesken Apt. No:50, 34310 Avcılar/İstanbul</label>
                            </div>
                            <div className={ElementClassList.Box}>
                                <div className="flex items-center gap-4">
                                    <IconBox icon="phone"/>
                                    <label className="text-xl block font-bold">Telefon</label>
                                </div>
                                <label className="text-md text-gray-500">0533 815 89 29</label>
                            </div>
                            <div className={ElementClassList.Box}>
                                <div className="flex items-center gap-4">
                                    <IconBox icon="mail"/>
                                    <label className="text-xl block font-bold">E-Posta</label>
                                </div>
                                <label className="text-md text-gray-500">info@ozbeymimarlik.com</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}