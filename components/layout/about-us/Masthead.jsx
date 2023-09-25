import Companies from '@data/Companies';
import classNames from 'classnames';
import { Lora } from 'next/font/google';
import Image from 'next/image';

const MastheadTitleFont = Lora({subsets: ['latin']});

export default function Masthead(){
    return(
        <section id="about-us-masthead" className={`border-y relative bg-auto bg-opacity-100 bg-center bg-no-repeat border-[#AA530E]/50 min-h-[600px] block overflow-hidden`}>
            <div className="container mx-auto max-w-screen-xl border-x border-[#AA530E]/50 overflow-hidden">
                <div className='grid items-stretch gap-0 min-h-[600px] place-items-center'>
                    <div className='grid items-center gap-0 p-9 border-b border-[#AA530E]/50 w-full'>
                        <h1 className={`${MastheadTitleFont.className} text-6xl`}>Özbey Şirketler Grubu</h1>
                        <p className='text-black/50 text-md'>1997'den beri</p>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-3 h-full w-full'>
                        {Companies.map((company, index) => (
                            <div className={classNames(
                                'group p-4 gap-4 lg:p-9 w-full h-full flex justify-between lg:grid lg:place-items-center text-center',
                                (index === 1) && 'border-t border-b lg:border-l lg:border-r border-[#AA530E]/50'
                            )}>
                                <Image
                                    src={company.logo}
                                    className={classNames(
                                        'w-24 h-24 animate__animated animate__fadeInUp'
                                    )}
                                />
                                <div className='grid gap-4 text-left'>
                                    <h2 className={classNames(
                                        'text-bold text-2xl block animate__animated animate__fadeInUp'
                                    )}>
                                        {company.name}
                                    </h2>
                                    <p className={classNames(
                                        'text-black/50 animate__animated animate__fadeInUp'
                                    )}>
                                        {company.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}