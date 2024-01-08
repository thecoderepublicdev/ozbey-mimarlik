import Title from "@components/shared/Title";
import Layout from "../_layout";
import Container from "@components/layout/Container";
import classNames from "classnames";

const Specs = [
    {
        isShowable: false,
        icon: 'outdoor_garden',
        title: "150 m2'ye kadar bahçe"
    },
    {
        isShowable: true,
        icon: 'diamond',
        title: 'Sauna'
    },
    {
        isShowable: true,
        icon: 'sports_football',
        title: 'Oyun Parkı'
    },
    {
        isShowable: true,
        icon: 'fitness_center',
        title: 'Spor Salonu'
    },
    {
        isShowable: true,
        icon: 'local_parking',
        title: 'Kapalı Otopark'
    },
    {
        isShowable: true,
        icon: 'ev_charger',
        title: 'Şarj İstasyonu'
    },
    {
        isShowable: true,
        icon: 'home_iot_device',
        title: 'Akıllı Ev Sistemi'
    },
];

const SpecsTag = ({ icon, title, className, style}) => {
    return(
        <div className={classNames(
            'border border-brand-primary min-w-fit rounded-full animate__animated animate__fadeInUp col-start-auto text-brand-primary backdrop-blur-sm p-4 flex gap-4 justify-center align-center items-center content-center',
            className
        )} style={style}>
            <span className='material-symbols-outlined'>{icon}</span>
            <label>{title}</label>
        </div>
    )
}

export default function BeykoruVillalari() {
    return(
        <Layout>
            <Container>
                <div className="grid gap-4">
                    <Title level="h1">
                        Beykoru Villaları
                    </Title>
                    <p className="text-xl text-gray-500">
                        Göl Manzaralı & Bahçeli Yaşam Artık Avcılar’da!
                    </p>

                    <div className="grid grid-cols-6 justify-between gap-2">
                        {Specs.map((spec, key) => spec.isShowable && (
                            <SpecsTag icon={spec.icon} title={spec.title} />
                        ))}
                    </div>
                </div>

                <div className="my-8 grid gap-4">
                    <Title level="h2">Salon</Title>

                    <div className="grid grid-cols-3 gap-4">
                        {["01","02","03","04","05","06","07","08","09","10","11"].map((index) => (
                            <img
                                src={`/assets/images/beykoru-villalari/salon/${index}.png`}
                                className="w-full h-[300px]"
                            />
                        ))}
                    </div>
                </div>

                <div className="my-8 grid gap-4">
                    <Title level="h2">Yatak Odası</Title>

                    <div className="grid grid-cols-3 gap-4">
                        {["01","02","03","04","05","06","07"].map((index) => (
                            <img
                                src={`/assets/images/beykoru-villalari/yatak-odasi/${index}.png`}
                                className="w-full h-[300px]"
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </Layout>
    )
}