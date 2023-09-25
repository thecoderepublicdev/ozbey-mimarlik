import { Lora } from 'next/font/google';
import Image from 'next/image';

const lora = Lora({subsets: ['latin']});

export default function Hero(){
    return(
        <section id="hero" className='h-screen overflow-hidden relative'>
            <Image
                src={require('@assets/images/about-us-masthead-image.png')}
                className='h-full object-cover'
                alt=""
            />

            <div id="hero-content" className='absolute top-0 bottom-0 left-0 right-0 grid place-items-center bg-[#AA530E]/70 text-white'>
                <div className='container grid gap-4 mx-auto max-w-screen-xl'>
                    <label className='p-4 border w-fit uppercase  border-white'>Sınırılı Sayıda</label>
                    <h1 className={`${lora.className} text-7xl`}>Göl Manzaralı & Bahçeli Yaşam Artık Avcılar'da!</h1>
                </div>
            </div>
        </section>
    )
}   