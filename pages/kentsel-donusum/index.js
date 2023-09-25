import React from "react";
import Layout from "../_layout";
import KentselDonusumRSS from "@data/KentselDonusum";
import { Disclosure } from '@headlessui/react'
import classNames from "classnames";

export default function KentselDonusum() {
    return(
        <Layout>
            <div>
                <h2>Kentsel Dönüşüm Hakkında Sıkça Sorulan Sorular</h2>
                {KentselDonusumRSS.map((faq, index) => (
                    <Disclosure as="div" key={index} className="border-b border-gray-400 transition-all ease-in-out w-full">
                        {({open}) => (
                            <React.Fragment>
                                <Disclosure.Button
                                    as="button"
                                    className={classNames(
                                        'p-4 flex justify-between items-center w-full'
                                    )}
                                >
                                    <label>{faq.question}</label>
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
            </div>
        </Layout>
    )
}