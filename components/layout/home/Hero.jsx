import Modal from '@components/shared/Modal';
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
                    <label className='animate__animated animate__fadeInUp animate__fast p-4 rounded-full bg-white text-[#AA530E] w-fit uppercase'>Sınırılı Sayıda</label>
                    <h1 className={`${lora.className} text-7xl animate__animated animate__fadeInUp animate__fast`}>Göl Manzaralı & Bahçeli Yaşam Artık Avcılar'da!</h1>
                    <div className='grid grid-cols-2 gap-4 w-fit'>
                        <button className='animate__animated animate__fadeInUp animate__fast px-9 py-4 border-2 border-white bg-white text-[#AA530E] backdrop-blur-md'>Detaylı Bilgi Al</button>
                        <Modal>
                            <Modal.Trigger className='animate__animated animate__fadeInUp animate__fast px-9 py-4 border-2 border-white bg-transparent text-white'>
                                <label>Satın Al</label>
                            </Modal.Trigger>
                            <Modal.Content>
                                <h1>Talep oluştur</h1>
                            </Modal.Content>
                        </Modal>
                    </div>
                </div>
            </div>
        </section>
    )
}   