import Companies from '@data/Companies';
import CompanyInformations from '@data/CompanyInformations';
import classNames from 'classnames';
import { Lora } from 'next/font/google';
import Image from 'next/image';

const lora = Lora({subsets: ['latin']});

export default function Information(){
    return(
        <section id="about-us-masthead" className={`border-y relative bg-auto bg-opacity-100 bg-center bg-no-repeat border-[#AA530E]/50 block overflow-hidden`}>
            <div className="container mx-auto max-w-screen-xl border-x border-[#AA530E]/50 overflow-hidden">
                <div className='grid grid-cols-2 items-stretch gap-0 min-h-[600px] place-items-center'>
                    {CompanyInformations.map((information, index) => (
                        <div key={index} className='p-9 flex flex-col gap-2 border-b border-[#AA530E]/50'>
                            <span className='material-symbols-outlined text-[#AA530E] animate__animated animate__fadeInUp'>architecture</span>
                            {information.subTitle && (
                                <div className='animate__animated animate__fadeInUp flex gap-2 items-center align-center content-center p-2 border border-[#AA530E] text-[#AA530E] w-fit'>
                                    <label>{information.subTitle}</label>
                                </div>
                            )}
                            <div 
                                className={classNames(
                                    `${lora.className} text-bold text-2xl animate__animated animate__fadeInUp`
                                )}
                            >
                                {information.title}
                            </div>
                            <p className='text-black/50 animate__animated animate__fadeInUp'>{information.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}