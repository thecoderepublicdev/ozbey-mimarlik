import MastheadBottomData from "@data/MastheadBottomData";
import classNames from "classnames";

export default function MastheadBottom() {
    return(
        <div className={classNames(
            'bg-black text-white py-10'
        )}>
            <div className="py-8 px-4 mx-auto max-w-screen-2xl lg:py-16 lg:px-6 grid gap-6">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                    {MastheadBottomData.map((item, key) => (
                        <div key={key} className="flex flex-col gap-2">
                            <div className="bg-white text-black text-2xl  font-bold w-16 h-16 grid place-content-center">{key + 1}</div>
                            <label className="font-bold text-xl">{item.title}</label>
                            <label className="text-white/50">{item.description}</label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}