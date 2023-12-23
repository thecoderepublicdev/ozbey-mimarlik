import classNames from "classnames";
import Layout from "../_layout";
import IconBox from "@components/shared/IconBox";

export default function ContactPage() {
    const ElementClassList = {
        Masthead: classNames(
            'grid gap-4 min-h-[400px] py-[150px] container mx-auto'
        ),
        MastheadInner: classNames(
            'grid gap-4 place-content-start align-content-center mb-20'
        ),
        Title: classNames(
            'font-semibold text-6xl'
        ),
        Description: classNames(
            'text-gray-500 text-lg'
        ),
        Contact: classNames(
            'grid grid-cols-2 gap-8'
        ),
        Form: classNames(
            'grid grid-cols-2 gap-x-8 gap-y-10'
        ),
        FormGroup: classNames(
            'form-group'
        ),
        TextareaFormGroup: classNames(
            'form-group col-span-2'
        ),
        FormLabel: classNames(
            'text-md block mb-3'
        ),
        FormInput: classNames(
            'w-full h-16 bg-[#fafafa] border border-transparent transition-all focus:border-[#222222] outline-none px-6'
        ),
        FormTextarea: classNames(
            'w-full h-24 bg-[#fafafa] border border-transparent transition-all focus:border-[#222222] outline-none p-6'
        ),
        Button: classNames(
            'w-full transition-all bg-brand-primary text-white font-medium px-6 py-4 uppercase outline-none'
        ),
        Box: classNames(
            'p-4 border-b border-b-gray-200 flex flex-col gap-2 last:border-b-0'
        )
    }
    return(
        <Layout>
            <div className={ElementClassList.Masthead}>
                <div className={ElementClassList.MastheadInner}>
                    <h1 className={ElementClassList.Title}>Bizimle iletişime geçin</h1>
                    <p className={ElementClassList.Description}>Özbey İnşaat & Mimarlık olarak aklınıza takılan tüm sorulara yanıt vermeye hazırız</p>
                </div>
                <div className={ElementClassList.Contact}>
                    <form className={ElementClassList.Form}>
                        <div className={ElementClassList.FormGroup}>
                            <label htmlFor="full-name" className={ElementClassList.FormLabel}>Ad Soyad</label>
                            <input name="full-name" id="full-name" required placeholder="Ad Soyad" className={ElementClassList.FormInput} />
                        </div>
                        <div className={ElementClassList.FormGroup}>
                            <label htmlFor="phone" className={ElementClassList.FormLabel}>Telefon</label>
                            <input name="phone" id="phone" type="tel" required placeholder="Telefon" className={ElementClassList.FormInput} />
                        </div>
                        <div className={ElementClassList.FormGroup}>
                            <label htmlFor="email" className={ElementClassList.FormLabel}>E-Posta</label>
                            <input name="email" id="email" type="email" required placeholder="E-Posta" className={ElementClassList.FormInput} />
                        </div>
                        <div className={ElementClassList.FormGroup}>
                            <label htmlFor="subject" className={ElementClassList.FormLabel}>Konu</label>
                            <input name="subject" id="subject" required placeholder="Konu" className={ElementClassList.FormInput} />
                        </div>
                        <div className={ElementClassList.TextareaFormGroup}>
                            <label htmlFor="message" className={ElementClassList.FormLabel}>Mesaj</label>
                            <textarea name="message" id="message" required placeholder="Mesaj" className={ElementClassList.FormTextarea}></textarea>
                        </div>
                        <div>
                            <button type="submit" className={ElementClassList.Button}>Gönder</button>
                        </div>
                    </form>
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