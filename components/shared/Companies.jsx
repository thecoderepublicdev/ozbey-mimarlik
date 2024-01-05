import LogoCloudData from "@data/LogoCloud"
import SectionHeader from "./SectionHeader";
import { memo } from "react";

function Companies() {
    const Props = {
        Section: {
            className: 'bg-white'
        },
        Container: {
            className: 'py-8 px-4 mx-auto max-w-screen-2xl lg:py-16 lg:px-6 grid gap-6'
        },
        ContextContainer: {
            className: 'flex justify-between items-center align-center'
        },
        ContextContainerInner: {
            className: 'grid gap-4'
        },
        ContextTitle: {
            className: 'text-4xl font-bold text-brand-primary'
        },
        LogoCloudContainer: {
            className: 'grid grid-cols-2 lg:grid-cols-4 gap-1 overflow-hidden'
        },
        LogoCloudContainerItems: {
            className: 'rounded bg-brand-primary/5 group transition-all min-h-[200px] lg:min-h-[300px] ease-in-out relative overflow-hidden p-10 grid place-items-center place-content-center'
        },
    }
    return(
        <section {...Props.Section}>
            <div {...Props.Container}>
                <SectionHeader>
                    <SectionHeader.Title level="h2">
                        Özbey Şirketler Grubu
                    </SectionHeader.Title>
                    <SectionHeader.Description>
                        İnşaat alanı dışında da farklı sektörlerde ticari faaliyetlerimizi sürdürmekteyiz.
                    </SectionHeader.Description>

                    <SectionHeader.CallToAction link="/hakkimizda" icon="arrow_right_alt">
                        Hakkımızda
                    </SectionHeader.CallToAction>
                </SectionHeader>

                <div {...Props.LogoCloudContainer}>
                    {LogoCloudData.map((item, index) => (
                        <div key={index} {...Props.LogoCloudContainerItems}>
                            <img
                                src={item.logo}
                                alt={item.altText}
                                className="object-contain w-24 h-24"
                                loading='lazy'
                            />

                            {item.callToAction.isHave && (
                                <div className="opacity-0 invisible absolute backdrop-blur-md transition-all bg-white/50 group-hover:opacity-100 group-hover:visible grid place-content-center place-items-center top-0 w-full h-full">
                                    <a href={item.callToAction.link}>
                                        <item.callToAction.label className="border-2 border-brand-primary hover:bg-brand-primary hover:text-white text-brand-primary p-4"/>
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default memo(Companies)