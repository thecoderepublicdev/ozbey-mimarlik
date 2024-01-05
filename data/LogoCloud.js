import classNames from 'classnames';

const LogoCloudData = [
    {
        logo: '/assets/logos/gloria-jeans-avcilar.png',
        altText: '',
        callToAction: {
            isHave: true,
            link: "https://www.google.com/maps?s=web&lqi=ChVnbG9yaWEgamVhbnMgYXZjxLFsYXIiA4gBAUi9__S0o66AgAhaLxAAEAEQAhgAGAEYAiIVZ2xvcmlhIGplYW5zIGF2Y8SxbGFyKgYIAhAAEAEyAnRykgEEY2FmZaoBTxABKhAiDGdsb3JpYSBqZWFucyghMh4QASIa1hZ2R4-Fk2rcvbZv9VK_5cbbXAnMxfXAmg8yGRACIhVnbG9yaWEgamVhbnMgYXZjxLFsYXI&vet=12ahUKEwjJieXy98GDAxVKVfEDHR-kChIQ1YkKegQIFRAB..i&cs=0&um=1&ie=UTF-8&fb=1&gl=tr&sa=X&geocode=Kevf3dayocoUMWslrY-22sRf&daddr=Merkez,+Ahmet+Taner+K%C4%B1%C5%9Flal%C4%B1+Cd.+No:+25/A,+34310+Avc%C4%B1lar/%C4%B0stanbul",
            label: ({className}) => (
                <div className={classNames(
                    'flex gap-4 align-center items-center justify-center rounded', className
                )}>
                    <label>Yol Tarifi Al</label>
                    <span className='material-symbols-outlined'>directions</span>
                </div>
            )
        }
    },
    {
        logo: '/assets/logos/gloria-jeans-cennet.png',
        altText: '',
        callToAction: {
            isHave: true,
            link: "https://www.google.com/maps/dir//gloria+jeans+cennet+mahallesi/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x14caa3e0fde9088f:0xd419e8732256aa24?sa=X&ved=2ahUKEwiQuPKL-MGDAxX_efEDHRRHCtUQ9Rd6BAhCEAA",
            label: ({className}) => (
                <div className={classNames(
                    'flex gap-4 align-center items-center justify-center rounded', className
                )}>
                    <label>Yol Tarifi Al</label>
                    <span className='material-symbols-outlined'>directions</span>
                </div>
            )
        }
    },
    {
        logo: '/assets/logos/gloria-jeans-aydin-universitesi.png',
        altText: '',
        callToAction: {
            isHave: true,
            link: "https://www.google.com/maps/dir//gloria+jeans+ayd%C4%B1n+%C3%BCniversitesi/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x14caa3941a7802bb:0x6819e93445a9b21f?sa=X&ved=2ahUKEwibxOyT-MGDAxX9R_EDHWecB2oQ9Rd6BAheEAA",
            label: ({className}) => (
                <div className={classNames(
                    'flex gap-4 align-center items-center justify-center rounded', className
                )}>
                    <label>Yol Tarifi Al</label>
                    <span className='material-symbols-outlined'>directions</span>
                </div>
            )
        }
    },
    {
        logo: '/assets/logos/ozel-parlayan-yildiz.png',
        altText: 'Parlayan Yıldız Anaokulu ile okul öncesi eğitimde çocuklarımızın temel eğitim seviyelerini geliştirmekte ve bu doğrultuda elimizden gelen eğitimin en iyisini sağlamaktayız.',
        callToAction: {
            isHave: true,
            link: "https://www.google.com/maps/dir//gloria+jeans+ayd%C4%B1n+%C3%BCniversitesi/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x14caa3941a7802bb:0x6819e93445a9b21f?sa=X&ved=2ahUKEwibxOyT-MGDAxX9R_EDHWecB2oQ9Rd6BAheEAA",
            label: ({className}) => (
                <div className={classNames(
                    'flex gap-4 align-center items-center justify-center rounded', className
                )}>
                    <label>Siteyi Gör</label>
                    <span className='material-symbols-outlined'>directions</span>
                </div>
            )
        }
    }
];

export default LogoCloudData;