import React from "react";
import Layout from "../../_layout";
import KentselDonusumRSS from "@data/KentselDonusum";
import { Disclosure } from '@headlessui/react'
import classNames from "classnames";
import Modal from "@components/shared/Modal";
import HowToApplyUrbanTransformation from "@data/HowToApplyUrbanTransformation";

const FAQ = () => {
    return(
        <React.Fragment as="div">
            {KentselDonusumRSS.map((faq, index) => (
                <Disclosure as="div" key={index} className="border-b border-gray-200 transition-all ease-in-out w-full">
                    {({open}) => (
                        <React.Fragment>
                            <Disclosure.Button
                                as="button"
                                className={classNames(
                                    'p-4 flex justify-between items-center w-full'
                                )}
                            >
                                <label className={classNames({
                                    'text-brand-primary': open,
                                })}>{faq.question}</label>
                                <span className={classNames(
                                    'material-symbols-outlined transition-all ease-out',
                                    open && 'rotate-180'
                                )}>expand_more</span>
                            </Disclosure.Button>
                            <Disclosure.Panel className="text-gray-500 p-4">
                                {faq.answer}
                            </Disclosure.Panel>
                        </React.Fragment>
                    )}
                </Disclosure>
            ))}
        </React.Fragment>
    )
}

export default function KentselDonusum() {
    const Props = {
        MastheadContainer: {
            style: {
                backgroundImage: `url('${require('@images/kentsel-donusum-masthead-photo.jpg').default.src}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            },
            className: classNames(
                'min-h-[700px] overflow-hidden grid'
            )
        },
        MastheadContainerInner: {
            className: classNames(
                'grid gap-4 bg-black/50 w-full h-full place-content-center place-items-center'
            )
        },
        MastheadContainerInnerContext: {
            className: classNames(
                'max-w-screen-xl mx-auto grid gap-4'
            )
        },
        MastheadTitle: {
            className: classNames(
                'text-white text-6xl font-bold'
            )
        },
        MastheadDescription: {
            className: classNames(
                'text-white text-lg'
            )
        },
        FAQSection: {
            className: classNames(
                'py-8 px-4 mx-auto max-w-screen-2xl lg:py-16 lg:px-6 grid gap-6'
            )
        },
        ContentSection: {
            className: classNames(
                'py-8 px-4 mx-auto max-w-screen-2xl lg:py-16 lg:px-6 grid gap-6'
            )
        },
        FAQSectionTitle: {
            className: classNames(
                'text-4xl font-bold text-brand-primary'
            )
        }
    }
    return(
        <Layout>
            <div {...Props.MastheadContainer}>
                <div {...Props.MastheadContainerInner}>
                    <div {...Props.MastheadContainerInnerContext}>
                        <h1 {...Props.MastheadTitle}>Kentsel Dönüşüm</h1>
                        <p {...Props.MastheadDescription}>Eski, ekonomik ömrünü tamamlamış, depremlerde hasar görmüş evinizi; <strong>6306 sayılı Afet Riskli Yapıların Yenilenmesi Hakkında Kanun (Kentsel Dönüşüm Kanunu)</strong> ile yeniden inşa edebilirsiniz.</p>
                        <Modal>
                            <Modal.Button className="bg-white px-12 py-4 w-fit">
                                Başvur
                            </Modal.Button>

                            <Modal.Title>Kentsel Dönüşüm Başvurusu</Modal.Title>

                            <Modal.Content>
                                <p>content</p>
                            </Modal.Content>
                        </Modal>
                    </div>
                </div>
            </div>

            <div {...Props.FAQSection}>
                <div {...Props.ContentSection}>
                    <div {...Props.FAQSectionInnerHeader}>
                        <label className="text-black/50 text-lg">Deprem öldürmez. Bina öldürür.</label>
                        <h2 {...Props.FAQSectionTitle}>Kentsel Dönüşümden Nasıl Faydalanabilirim?</h2>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-6">
                        {HowToApplyUrbanTransformation.map((item, index) => (
                            <div key={index} className="flex flex-col gap-2 p-6 bg-brand-primary/5">
                                <h3 className="font-bold text-xl">{item.title}</h3>
                                <p className="text-black/50">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            <div {...Props.FAQSection}>
                <div className="py-8 px-4 mx-auto max-w-screen-2xl w-full lg:py-16 lg:px-6 grid grid-cols-1 gap-6">
                    <div className="grid gap-4 place-content-center place-items-center">
                        <label className="text-gray-500 uppercase">Kentsel Dönüşüm Hakkında</label>
                        <h2 {...Props.FAQSectionTitle}>Sıkça Sorulan Sorular</h2>
                    </div>
                    <div>
                        <FAQ/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}