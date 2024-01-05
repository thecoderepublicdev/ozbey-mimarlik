import classNames from "classnames"
import FooterData from "@data/Footer";
import Link from 'next/link';
import { ArrowUpIcon } from '@heroicons/react/24/solid'
import SocialMedia from "@components/shared/SocialMedia";

export default function Footer() {
    const Props = {
        Footer: {
            className: classNames(
                'text-black w-full mt-10 min-h-[400px] bg-black text-white'
            )
        },
        FooterInner: {
            className: classNames(
                'max-w-screen-2xl mx-auto grid grid-cols-1 p-6 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4 min-h-[300px] py-12'
            )
        }
    }

    return(
        <footer {...Props.Footer}>
            <div {...Props.FooterInner}>
                <div>
                    <label className="font-bold text-4xl">Özbey <br/> İnşaat & Mimarlık</label>
                </div>
                {FooterData.Blocks.map((block, id) => (
                    <div key={id}>
                        <label className="font-bold text-xl">{block.title}</label>

                        {block.items.map((item, id) => (
                            <ul key={id}>
                                <li key={item.label} className="text-white text-lg flex justify-between hover:text-brand-primary !cursor-pointer group py-2 opacity-50 hover:opacity-100 transition-all transition:ease-in-out">
                                    <Link {...item?.props} href={item.link}>
                                        {item.label}
                                    </Link>
                                    <ArrowUpIcon className='rotate-45 opacity-0 group-hover:opacity-100 w-6 h-6'/>
                                </li>
                            </ul>
                        ))}
                    </div>
                ))}
            </div>
            <div className="max-w-screen-2xl mx-auto flex align-center flex-col xl:flex-row lg:flex-row 2xl:flex-row gap-4 justify-between items-center border-t border-white/50 py-6">
                <div className="flex gap-2 items-center content-center justify-center align-center">
                    <SocialMedia name="Instagram" link="#"/>
                    <SocialMedia name="Facebook" link="#"/>
                    <SocialMedia name="X" link="#"/>
                </div>

                <div className="text-white/50">
                    <label><a href="https://thecoderepublic.com.tr/?utm_source=ozbeymimarlık">The Code Republic</a> tarafından geliştirildi</label>
                </div>
            </div>
        </footer>
    )
}