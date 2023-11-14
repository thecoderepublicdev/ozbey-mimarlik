import CompanyInformations from '@data/CompanyInformations';
import classNames from 'classnames';
import { Syne, DM_Sans } from 'next/font/google';

const syne = Syne({subsets: ['latin']});
const DMSans = DM_Sans({subsets: ['latin']});

export default function Information(){
    return(
        <section className="bg-brand-secondary/10 min-h-screen grid place-items-center">
            <div className="py-8 px-4 mx-auto max-w-screen-2xl lg:py-16 lg:px-6">
                <div>
                    <h2 className={classNames(
                        "mb-4 text-4xl tracking-tight font-bold text-brand-primary",
                        syne.className
                    )}>Bizi yakından tanıyın</h2>
                    <p className={classNames(
                        "mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl",
                        DMSans.className
                    )}>1997'den günümüze kadar faaliyet gösteren şirketimizi sizlere tanıtmak isteriz.</p>
                </div> 
                <div className="grid gap-4 lg:grid-cols-2">
                    {CompanyInformations.map((information, id) => (
                        <div className="hover:drop-shadow-2xl transition-all ease-in-out flex flex-col justify-between gap-4 items-start p-8 bg-white md:p-12">
                            <h3 className={classNames(
                                'font-medium text-2xl',
                                syne.className
                            )}>{information.title}</h3> 
                            <p className='text-gray-500'>{information.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}