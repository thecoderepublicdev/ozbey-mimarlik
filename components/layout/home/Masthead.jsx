import Image from 'next/image';
import { Swiper, SwiperSlide  } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import classNames from 'classnames';

import { DM_Sans } from 'next/font/google';

const DMSans = DM_Sans({subsets: ['latin']});

export default function Masthead({children}) {
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

    const SpecsTag = ({ icon, title, className, style}) => {
        return(
            <div className={classNames(
                'animate__animated animate__fadeInUp col-start-auto text-brand-primary backdrop-blur-sm p-4 flex gap-4 justify-center align-center items-center content-center',
                className
            )} style={style}>
                <span className='material-symbols-outlined'>{icon}</span>
                <label>{title}</label>
            </div>
        )
    }
    
    const Props = {
        Swiper: {
            speed: 4000,
            virtual: false,
            slidesPerView: 3,
            spaceBetween: 8,
            loop: true,
            autoplay: {
                delay: 1,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            wrapperClass: '!ease-linear',
            modules: [Autoplay],
            className:'w-full'
        },
        MastheadContainer: {
            className: classNames(
                "p-0 mb-10 mt-10 bg-gray-100 container max-w-screen-2xl mx-auto"
            )
        },
        MastheadContent: {
            className: classNames(
                'p-10 grid place-items-start gap-4 w-full'
            )
        },
        MastheadTitle: {
            className: classNames(
                'text-black text-7xl text-left font-bold tracking-tighter', DMSans.className
            )
        },
        MastheadDescription: {
            className: classNames(
                'text-brand-primary text-md px-6 py-2 border border-brand-primary rounded-full'
            )
        }
    }
    
    return(
        <section {...Props.MastheadContainer}>
            <div {...Props.MastheadContent}>
                <p {...Props.MastheadDescription}>
                    %40 peşin ödemeli ve 24 Ay Vade Ödeme Şekli ile Daire Fiyatına Villa Sahibi Olun!
                </p>
                <h1 {...Props.MastheadTitle}>Göl Manzaralı & Bahçeli Yaşam <br/> Artık Avcılar’da!</h1>
                <div className='flex justify-between align-center items-center w-full mt-6'>
                    <div className='grid place-items-start place-content-start grid-cols-2 lg:grid-cols-6 gap-2'>
                        {Specs.map((spec, key) => !spec.isHidden && (
                            <SpecsTag
                                key={key} 
                                icon={spec.icon} 
                                title={spec.title}
                                style={{animationDelay:`${key + 1}00ms`}}
                            />
                        ))}
                    </div>

                    <a href='#' className='px-8 py-4 bg-black text-white rounded hover:shadow-xl transition ease-in-out'>
                        Detaylı Bilgi Al
                    </a>
                </div>
            </div>

            <div className='w-full'>
                <Swiper {...Props.Swiper}>
                    {[...Array(14)].map((_, index) => (
                        <SwiperSlide key={index} virtualIndex={index + 1}>
                            <div className='group relative'>
                                <Image
                                    loading='lazy'
                                    placeholder="blur"
                                    blurDataURL={require(`@assets/images/firuzkoy/Firüzköy-${index + 1}.jpg`).blurDataURL}
                                    style={{ width: '800', height: '500px', objectFit: 'cover' }}
                                    className='group-hover:!w-full'
                                    width="600"
                                    height="500"
                                    alt='x'
                                    src={require(`@assets/images/firuzkoy/Firüzköy-${index + 1}.jpg`)}
                                />
                                <div className='transition-all ease-in-out hidden absolute bg-brand-primary/50 text-white top-0 w-full h-full group-hover:grid place-content-center'>
                                    <a href='#' className='border-2 border-white p-4 hover:bg-white hover:text-brand-primary backdrop-blur-sm'>Detaylı Bilgi al</a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {children}
        </section>
    )
}