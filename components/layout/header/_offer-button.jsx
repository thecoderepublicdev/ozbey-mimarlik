import { createElement, useEffect, useState } from "react";
import { useFormik } from "formik";
import classNames from "classnames";
import * as Yup from 'yup';
import Modal from '@shared/Modal';
import axios from "axios";
import ContactForm from "../../../forms/ContactForm";

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
    const [selectedCity, setSelectedCity] = useState(1);
    const [formIsSubmitted, setFormSubmittedStatus] = useState();
    const [APIResponseSuccess, setAPIResponseStatus] = useState()
    const [provinces, setProvinces] = useState([
        {id: 0, name: "İl seçiniz"}
    ]);
    const [subProvinces, setSubProvinces] = useState([
        {id: 0, name: "İlçe seçiniz"}
    ])
    const [ownerStatus, setOwnerStatus] = useState(false);

    const [APIErrors] = useState({
        provinces: false,
        subProvinces: false,
    })

    console.log("type APIResponseSuccess", typeof APIResponseSuccess)

    const Props = {
        Modal: {
            title: "Kentsel Dönüşüm Başvurusu Oluştur"
        },
        ModalTrigger: {
            className: "px-6 py-4 text-sm transition-all ease-in-out bg-brand-primary hover:bg-black flex items-center gap-4 text-white h-full"
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
                <ContactForm/>
            </Modal.Content>
        </Modal>
    )
}