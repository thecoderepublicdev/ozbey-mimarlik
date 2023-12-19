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
                'max-w-screen-xl mx-auto grid grid-cols-5 gap-4 min-h-[300px] py-12'
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
                        <label className="font-bold">{block.title}</label>

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
            <SocialMedia name="Instagram" link="#"/>
        </footer>
    )
}