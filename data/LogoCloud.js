import classNames from 'classnames';

const LogoCloudData = [
    {
        logo: require('@assets/logos/gloria-jeans-avcilar.png'),
        altText: '',
        callToAction: {
            isHave: true,
            link: "#",
            label: ({className}) => (
                <div className={classNames(
                    'flex gap-4 align-center items-center justify-center', className
                )}>
                    <label>Yol Tarifi Al</label>
                    <span className='material-symbols-outlined'>directions</span>
                </div>
            )
        }
    },
    {
        logo: require('@assets/logos/gloria-jeans-cennet.png'),
        altText: '',
        callToAction: {
            isHave: true,
            link: "#",
            label: ({className}) => (
                <div className={classNames(
                    'flex gap-4 align-center items-center justify-center', className
                )}>
                    <label>Yol Tarifi Al</label>
                    <span className='material-symbols-outlined'>directions</span>
                </div>
            )
        }
    },
    {
        logo: require('@assets/logos/gloria-jeans-aydin-universitesi.png'),
        altText: '',
        callToAction: {
            isHave: true,
            link: "#",
            label: ({className}) => (
                <div className={classNames(
                    'flex gap-4 align-center items-center justify-center', className
                )}>
                    <label>Yol Tarifi Al</label>
                    <span className='material-symbols-outlined'>directions</span>
                </div>
            )
        }
    },
    {
        logo: require('@assets/logos/ozbey-bilisim.png'),
        altText: '',
        callToAction: {
            isHave: false,
            link: "#"
        }
    },
    {
        logo: require('@assets/logos/ozbey-dekorasyon.png'),
        altText: '',
        callToAction: {
            isHave: false,
            link: "#",
        }
    },
    {
        logo: require('@assets/logos/ozel-parlayan-yildiz.png'),
        altText: 'Parlayan Yıldız Anaokulu ile okul öncesi eğitimde çocuklarımızın temel eğitim seviyelerini geliştirmekte ve bu doğrultuda elimizden gelen eğitimin en iyisini sağlamaktayız.',
        callToAction: {
            isHave: false,
            link: "#"
        }
    }
];

export default LogoCloudData;