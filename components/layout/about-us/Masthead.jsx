export default function Companies(){
    const Props = {
        MastheadContainer: {
            style: {
                backgroundImage: `url('/assets/images/firuzkoy/Firüzköy-4.webp')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            },
            className: 'min-h-[700px] overflow-hidden grid'
        },
        MastheadContainerInner: {
            className: 'grid gap-4 bg-black/50 w-full h-full place-content-center text-center place-items-center'
        },
        MastheadContainerInnerContext: {
            className: 'max-w-screen-xl mx-auto grid gap-4'
        },
        MastheadTitle: {
            className: 'text-white text-6xl font-bold'
        },
        MastheadDescription: {
            className: 'text-white text-lg'
        },
    }
    return(
        <div {...Props.MastheadContainer}>
            <div {...Props.MastheadContainerInner}>
                <div {...Props.MastheadContainerInnerContext}>
                    <p {...Props.MastheadDescription}>Özbey Şirketler Grubu</p>
                    <h1 {...Props.MastheadTitle}>Hakkımızda</h1>
                </div>
            </div>
        </div>
    )
}