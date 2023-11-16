import TestimonialsData from "@data/Testimonials";
import classNames from "classnames";
import { Syne, DM_Sans } from 'next/font/google';

const syne = Syne({subsets: ['latin']});
const DMSans = DM_Sans({subsets: ['latin']});

export default function Testimonials() {
    return(
        <section className="bg-brand-secondary/10 min-h-screen grid place-items-center">
            <div className="py-8 px-4 mx-auto max-w-screen-2xl lg:py-16 lg:px-6">
                <div>
                    <h2 className={classNames(
                        "mb-4 text-4xl tracking-tight font-bold text-brand-primary",
                        DMSans.className
                    )}>Bize değil, onlara güvenin</h2>
                    <p className={classNames(
                        "mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl",
                        DMSans.className
                    )}>Teslim ettiğimiz projelerden sonra müşterilerimiz tarafından bize iletilen yorumlar</p>
                </div> 
                <div className="grid gap-4 lg:grid-cols-3">
                    {TestimonialsData.map((person, id) => (
                        <figure key={id} className="hover:drop-shadow-2xl transition-all ease-in-out flex flex-col justify-between items-start p-8 bg-white md:p-12">
                            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500">
                                <p className={classNames(
                                    "my-4", DMSans.className
                                )}>{person.comment}</p>
                            </blockquote>
                            <figcaption className="flex justify-start items-center">
                                <div className="font-medium text-left">
                                    <div className={classNames(syne.className)}>{person.name}</div>
                                    <div className={classNames(
                                        "text-sm font-light text-gray-500"
                                    )}>{person.title}</div>
                                </div>
                            </figcaption>    
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    )
}