import classNames from 'classnames';
import { Syne } from 'next/font/google';
import Link from 'next/link';
import Modal from '@components/shared/Modal';

const syne = Syne({subsets: ['latin']});

const Specs = [
    {
        isHidden: true,
        icon: 'outdoor_garden',
        title: "150 m2'ye kadar bahçe"
    },
    {
        isHidden: false,
        icon: 'diamond',
        title: 'Sauna'
    },
    {
        isHidden: false,
        icon: 'sports_football',
        title: 'Oyun Parkı'
    },
    {
        isHidden: false,
        icon: 'fitness_center',
        title: 'Spor Salonu'
    },
    {
        isHidden: false,
        icon: 'local_parking',
        title: 'Kapalı Otopark'
    },
    {
        isHidden: false,
        icon: 'ev_charger',
        title: 'Şarj İstasyonu'
    },
    {
        isHidden: false,
        icon: 'home_iot_device',
        title: 'Akıllı Ev Sistemi'
    },
];

const SpecsTag = ({ icon, title, className }) => {
    return(
        <div className={classNames(
            'col-start-auto text-white backdrop-blur-sm p-4 flex gap-4 justify-center align-center items-center content-center',
            className
        )}>
            <span className='material-symbols-outlined'>{icon}</span>
            <label>{title}</label>
        </div>
    )
}

function Content() {
    return(
        <div className='grid gap-4 w-full place-content-center place-items-center text-center z-0'>
            <div className='grid gap-4'>
                <p className='text-black/50 text-md lg:text-xl mt-4 lg:mt-10 rounded-full border-2 border-brand-primary text-brand-primary p-4'>
                    %40 peşin ödemeli ve 24 Ay Vade Ödeme Şekli ile Daire Fiyatına Villa Sahibi Olun!
                </p>
                <h1 className={classNames(
                    "text-4xl lg:text-8xl",lora.className
                )}>
                    Göl Manzaralı & Bahçeli Yaşam Artık Avcılar'da!
                </h1>
                <div className='grid grid-cols-2 lg:grid-cols-6 mt-6 gap-2'>
                    {Specs.map((spec, key) => !spec.isHidden && (
                        <SpecsTag 
                            key={key} 
                            icon={spec.icon} 
                            title={spec.title}
                        />
                    ))}
                </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
                <button className='animate__animated animate__fadeInUp p-4 bg-[#AA530E] text-white'>Detaylı Bilgi Al</button>
                <Modal>
                    <Modal.Trigger className="animate__animated animate__fadeInUp border-2 border-[#AA530E] hover:bg-[#AA530E]/10 text-[#AA530E]">
                        <label>Satın Al</label>
                    </Modal.Trigger>

                    <Modal.Content>
                        <label className={classNames(
                            'text-2xl font-bold',
                            syne.className
                        )}>
                            Talep Oluştur
                        </label>
                    </Modal.Content>
                </Modal>
            </div>
        </div>
    )
}


export default function Hero(){
    const Props = {
        Hero: {
            id: 'hero',
            style: {
                backgroundImage: `url('${require(`@assets/images/firuzkoy/Firüzköy-14.jpg`).default.src}')`
            },
            className: classNames(
                'bg-cover relative mx-auto h-screen overflow-hidden grid place-items-center before:content-[""] before:absolute before:w-full before:h-full before:bg-black/50'
            )
        },
        HeroContent: {
            className: classNames(
                'max-w-screen-2xl grid place-items-center gap-4 mx-auto px-5 absolute'
            )
        },
        HeroTitle: {
            className: classNames(
                'text-white font-bold text-center text-6xl animate__animated animate__fadeInUp',
                syne.className
            )
        }
    }
    return(
        <section {...Props.Hero}>
            <div {...Props.HeroContent}>
                <h1 {...Props.HeroTitle}>Göl Manzaralı & Bahçeli Yaşam Artık Avcılar’da!</h1>
                <div className='flex gap-4'>
                    {Specs.map((spec, id) => (
                        <SpecsTag key={id} {...spec}/>
                        ))}
                </div>
                <div className='grid grid-cols-2 gap-4 max-w-[600px]'>
                    <Modal>
                        <Modal.Button className={classNames(
                            'bg-white text-black font-bold animate__animated animate__fadeInUp',
                            syne.className
                        )}>
                            Teklif Al
                        </Modal.Button>

                        <Modal.Title as="h3">Teklif Talebi Oluştur</Modal.Title>

                        <Modal.Content>
                            <p>Deneme</p>
                        </Modal.Content>
                    </Modal>
                    <Link href={"#"} className={classNames(
                        'animate__animated animate__fadeInUp border-2 border-white font-bold p-4 block text-center text-white',
                        syne.className
                    )}>
                        Detaylı Bilgi Edin
                    </Link>
                </div>
            </div>
        </section>
    )
}