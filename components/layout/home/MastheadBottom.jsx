import MastheadBottomData from "@data/MastheadBottomData";
import { useApplication } from "@hooks/Application";
import classNames from "classnames";

export default function MastheadBottom({backgroundColor, titleColor, descColor, borderClass}) {
    const { PrimaryFont } = useApplication();

    return(
        <div className={classNames(
            'py-10', {
                [`${backgroundColor}`]: (typeof backgroundColor === 'string'), 
                [`${titleColor}`]: (typeof titleColor === 'string'), 
            }
        )}>
            <div className="py-8 px-4 mx-auto max-w-screen-2xl lg:py-16 lg:px-6 grid gap-6">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-x-10">
                    {MastheadBottomData.map((item, key) => (
                        <div key={key} className="flex flex-col gap-2 animate__animated animate__fadeInUp" style={{animationDelay:`${key == 0 ? key : key * 2}00ms`}}>
                            <label className={classNames(
                                'font-bold text-3xl relative after:absolute after:rounded-md tracking-tighter', {
                                    [`${borderClass}`]: (typeof borderClass === 'string'),
                                    [PrimaryFont]: true
                                })}>{item.title}</label>
                            <label className={descColor}>{item.description}</label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}