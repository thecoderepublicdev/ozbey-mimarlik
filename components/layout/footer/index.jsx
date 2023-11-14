import classNames from "classnames"
import FooterData from "@data/Footer";

export default function Footer() {
    const Props = {
        Footer: {
            className: classNames(
                'bg-black text-white w-full'
            )
        },
        FooterInner: {
            className: classNames(
                'max-w-screen-xl mx-auto grid grid-cols-4 gap-4 min-h-[300px] py-12'
            )
        }
    }

    return(
        <footer {...Props.Footer}>
            <div {...Props.FooterInner}>
                {FooterData.Blocks.map((block, id) => (
                    <div key={id}>
                        <label className="font-bold">{block.title}</label>

                        {block.items.map((item, id) => (
                            <ul key={id}>
                                <li>
                                    <a className="block opacity-50 hover:opacity-100 transition-all ease-in-out cursor-pointer py-2" href={item.link}>
                                        <label>{item.label}</label>
                                    </a>
                                </li>
                            </ul>
                        ))}
                    </div>
                ))}
            </div>
        </footer>
    )
}