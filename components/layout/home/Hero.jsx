import { Lora } from 'next/font/google';
import Image from 'next/image';

const MastheadTitleFont = Lora({subsets: ['latin']});

export default function Hero(){
    return(
        <section id="masthead" className="border-y border-gray-400 mt-9 min-h-[600px] block overflow-hidden">
            <div className="container mx-auto max-w-screen-xl border-x border-gray-400 p-9 overflow-hidden">
                <div className='grid grid-cols-2 gap-4 relative min-h-[600px] place-items-center'>
                    <div>
                        <h1 className={`${MastheadTitleFont.className} text-6xl`}>Hayalleriniz bizim için önemli</h1>
                        <p className='text-black/50 text-md'>Gerek kentsel dönüşüm projesi olarak gerekse kat karşılığı yaptığımız tüm projelerimizde öncelik olarak sizin hayallerinizi gerçekleştirmek için buradayız.</p>
                    </div>

                    <div>
                        <picture className='absolute right-0 top-0'>
                            <Image
                                src={require('@assets/images/hero-bg.png')}
                                className='w-full h-full object-contain object-center'
                            />
                        </picture>
                    </div>
                </div>
            </div>
        </section>
    )
}