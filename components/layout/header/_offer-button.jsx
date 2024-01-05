import classNames from "classnames";
import Modal from '@shared/Modal';
import ContactForm from "../../../forms/ContactForm";
import { useHeader } from ".";

const FormResultState = ({isSuccess}) => {
    const Props = {
        Container: {
            className: classNames(
                'grid gap-4 place-content-center place-items-center border-2 rounded-lg border-gray-100 w-full text-center p-6', {

                }
            )
        },
        Icon: {
            className: classNames(
                'block rounded-full w-16 h-16 p-4 grid place-content-center place-items-center',
                {
                    'bg-red-100 text-red-500': !isSuccess,
                    'bg-green-100 text-green-500': isSuccess
                }
            )
        },
        Title: {
            className: classNames('font-bold text-xl', {
                'text-red-500': !isSuccess,
                'text-green-500': isSuccess,
            })
        }
    }

    return(
        <div {...Props.Container}>
            <div {...Props.Icon}>
                <span className="material-symbols-outlined">
                    {!isSuccess && 'error'}
                    {isSuccess && 'verified'}
                </span>
            </div>
            <span {...Props.Title}>
                {!isSuccess && 'Bir hata oluştu!'}
                {isSuccess && 'Bizimle iletişime geçtiğiniz için teşekkürler'}
            </span>
            <p className="text-gray-500 text-center">
                {!isSuccess && 'Form gönderilirken bir hata oluştu, lütfen daha sonra tekrar dener misiniz?'}
                {isSuccess && 'Kentsel Dönüşüme olan ilginiz için teşekkür ederiz, ekibimiz 48 saat içerisinde sizlere geri dönüş yapacaktır'}
            </p>
        </div>
    )       
}

export default function OfferButton() {
    const {variant} = useHeader();

    const Props = {
        Modal: {
            title: "Kentsel Dönüşüm Başvurusu Oluştur"
        },
        ModalTrigger: {
            className: classNames(
                "px-6 py-4 text-sm transition-all ease-in-out flex items-center gap-4 h-full rounded", {
                    "bg-brand-primary hover:bg-black text-white": variant === 'default',
                    "bg-transparent backdrop-blur-md rounded-full font-bold hover:bg-black text-white": variant === 'transparent',
                }
            )
        } 
    }
    

    return(
        <Modal {...Props.Modal}>
            <Modal.Button {...Props.ModalTrigger}>
                <label className="leading-tight text-left">Kentsel Dönüşüm Başvurusu</label>
                <span className="material-symbols-outlined">arrow_right_alt</span>
            </Modal.Button>

            <Modal.Title>
                Kentsel Dönüşüm Talebi Oluştur
            </Modal.Title>

            <Modal.Content>
                <ContactForm type="KENTSEL_DONUSUM"/>
            </Modal.Content>
        </Modal>
    )
}