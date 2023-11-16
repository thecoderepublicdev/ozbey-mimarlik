import MastheadBottomData from "@data/MastheadBottomData";
import classNames from "classnames";

export default function MastheadBottom(props) {
    return(
        <div className={classNames(
            `${props.backgroundColor ?? ''} ${props.titleColor ?? ''} py-10`
        )}>
            <div className="py-8 px-4 mx-auto max-w-screen-2xl lg:py-16 lg:px-6 grid gap-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-10">
                    {MastheadBottomData.map((item, key) => (
                        <div key={key} className="flex flex-col gap-2 animate__animated animate__fadeInUp" style={{animationDelay:`${key == 0 ? key : key * 2}00ms`}}>
                            <label className={classNames(`font-bold text-3xl relative after:absolute after:rounded-md ${props.borderClass ?? ''}`)}>{item.title}</label>
                            <label className={classNames(props.descColor ?? '')}>{item.description}</label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}