import classNames from "classnames";
import { DM_Sans } from "next/font/google";
import { memo } from "react";

const Font = DM_Sans({subsets: ['latin']});

function MastheadFullScreen() {
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
                'rounded-full animate__animated animate__fadeInUp col-start-auto text-white backdrop-blur-sm p-4 flex gap-4 justify-center align-center items-center content-center',
                className
            )} style={style}>
                <span className='material-symbols-outlined'>{icon}</span>
                <label>{title}</label>
            </div>
        )
    }

    return(
        <section style={{backgroundImage: "url('/assets/images/firuzkoy/Firüzköy-12.webp')"}} className="relative bg-cover overflow-hidden container-xl mx-auto h-[800px] grid place-content-center place-items-center before:content-[''] before:w-full before:h-full before:bg-black/30 before:absolute before:z-1">
            <div className="z-10 max-w-screen-xl grid place-content-center place-items-center text-center gap-4">
                <h1 className={classNames(
                    'font-bold text-7xl text-white tracking-tighter	', Font.className
                )}>
                    Göl Manzaralı & Bahçeli Yaşam Artık Avcılar’da!
                </h1>

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

                <div className="grid grid-cols-2 gap-4">
                    <a className="block rounded px-6 py-4 font-bold cursor-pointer bg-white">Talep Oluştur</a>
                    <a className="block rounded px-6 py-4 font-bold cursor-pointer text-white border-2 border-white backdrop-blur-md">Detaylı Bilgi Al</a>
                </div>
            </div>
        </section>
    )
}

export default memo(MastheadFullScreen)