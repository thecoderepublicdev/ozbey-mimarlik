import { useEffect, useState } from "react";
import { useFormik } from "formik";
import classNames from "classnames";
import * as Yup from 'yup';
import Modal from '@shared/Modal';
import axios from "axios";

const FormResultState = ({type}) => {
    const Props = {
        Container: {
            className: classNames('grid gap-4 place-content-center place-items-center w-full')
        },
        Icon: {
            className: classNames(
                'block rounded-full w-16 h-16 p-4 grid place-content-center place-items-center',
                {
                    'bg-red-100 text-red-500': type === 'error',
                    'bg-green-100 text-green-500': type === 'success'
                }
            )
        },
        Title: {
            className: classNames('font-bold text-xl', {
                'text-red-500': type === 'error',
                'text-green-500': type === 'success',
            })
        }
    }

    return(
        <div {...Props.Container}>
            <div {...Props.Icon}>
                <span className="material-symbols-outlined">
                    {type === 'error' && 'error'}
                    {type === 'success' && 'verified'}
                </span>
            </div>
            <span {...Props.Title}>
                {type === 'error' && 'Bir hata oluştu!'}
                {type === 'success' && 'Bizimle iletişime geçtiğiniz için teşekkürler'}
            </span>
            <p className="text-gray-500 text-center">
                {type === 'error' && 'Form gönderilirken bir hata oluştu, lütfen daha sonra tekrar dener misiniz?'}
                {type === 'success' && 'Kentsel Dönüşüme olan ilginiz için teşekkür ederiz, ekibimiz 48 saat içerisinde sizlere geri dönüş yapacaktır'}
            </p>
        </div>
    )       
}

export default function OfferButton() {
    const [selectedCity, setSelectedCity] = useState(1);
    const [formIsSubmitted, setFormSubmittedStatus] = useState();
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

    const Props = {
        Modal: {
            title: "Kentsel Dönüşüm Başvurusu Oluştur"
        },
        ModalTrigger: {
            className: "px-6 py-4 text-sm transition-all ease-in-out bg-brand-primary hover:bg-black flex items-center gap-4 text-white h-full"
        } 
    }


    useEffect(function() {
        fetch('https://turkiyeapi.herokuapp.com/api/v1/provinces')
        .then((response) => response.json())
        .then((response) => setProvinces(response.data))
        .catch((error) => {
            console.log("[TCR API Error - Province - Default] ", error);
            APIErrors.provinces = true;
        })

        fetch('https://turkiyeapi.herokuapp.com/api/v1/provinces/1')
        .then((response) => response.json())
        .then((response) => setSubProvinces(response.data.districts))
        .catch((error) => {
            console.log("[TCR API Error - SubProvince - Default] ", error);
            APIErrors.subProvinces = true;
        })  
    }, []);

    useEffect(function() {
        fetch(`https://turkiyeapi.herokuapp.com/api/v1/provinces/${selectedCity}`)
        .then((response) => response.json())
        .then((response) => setSubProvinces(response.data.districts))
        .catch((error) => {
            console.log("[TCR API Error - SubProvince - Selected City] ", error);
            APIErrors.subProvinces = true;
        })
    }, [selectedCity]);

    const SubmissionForm = () => {

        const OfferForm = useFormik({
            initialValues: {
                fullName: "",
                phone: "",
                email: "",
                city: "",
                subProvince: "",
                owner: false,
                message: ""
            },
            validationSchema: Yup.object({
                fullName: Yup.string().required('Ad & Soyad zorunludur'),
                phone: Yup.number().required('Telefon numarası iletişim için zorunludur.'),
                email: Yup.string().email().required('E-Posta Adresi Zorunludur'),
                city: Yup.string().required('İl bilgisi zorunludur'),
                subProvince: Yup.string().required('İlçe bilgisi zorunludur'),
            }),
            handleSubmit: ({e}) => {
                console.log("handleSubmit", ...e);  
            },
            handleChange: ({e}) => {
                console.log(e);
            },
            onSubmit: async (values, { setSubmitting }) => {
                console.log("onSubmit", values);
                
                await axios.post('/api/mail/send', values).then(res => {
                    console.log("Offer Form Sended", res.data)
                    setFormSubmittedStatus(res.data.success)
                })
            }
        });

        const { values, errors, touched, handleSubmit, isSubmitting } = OfferForm;
        return(
            <form method="POST" onSubmit={handleSubmit} className="grid gap-4">
                <div>
                    <input disabled={isSubmitting} id="fullName" name="fullName" onChange={OfferForm.handleChange} required={true} type="text" placeholder="Adınız & Soyadınız" className="p-4  w-full border border-gray-200 outline-none focus:border-[#AA530E] focus:text-[#AA530E] focus:placeholder:text-[#AA530E]"/>
                    {errors.fullName && touched.fullName && (<span className="text-red-500 mt-2">{errors.fullName}</span>)}
                </div>
                <div>
                    <input disabled={isSubmitting} id="phone" name="phone" onChange={OfferForm.handleChange} required={true} type="tel" placeholder="Telefon Numaranız" className="p-4  w-full border border-gray-200 outline-none focus:border-[#AA530E] focus:text-[#AA530E] focus:placeholder:text-[#AA530E]"/>
                    {errors.phone && (<span className="text-red-500 mt-2">{errors.phone}</span>)}
                </div>
                <div>
                    <input disabled={isSubmitting} id="email" name="email" onChange={OfferForm.handleChange} required={true} type="email" placeholder="E-Posta Adresiniz" className="p-4  w-full border border-gray-200 outline-none focus:border-[#AA530E] focus:text-[#AA530E] focus:placeholder:text-[#AA530E]"/>
                    {errors.email && (<span className="text-red-500 mt-2">{errors.email}</span>)}
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <select id="city" name="city" disabled={APIErrors.provinces || isSubmitting} required={true} onChange={OfferForm.handleChange} className="p-4  w-full border border-gray-200 outline-none disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed  focus:border-[#AA530E] focus:text-[#AA530E] focus:placeholder:text-[#AA530E]">
                            {provinces?.map((province) => (
                                <option key={province.id} value={province.id}>
                                    {province.name}
                                </option>
                            ))}
                        </select>
                        {errors.city && (<span className="text-red-500 mt-2">{errors.city}</span>)}
                    </div>

                    <div>
                        <select id="subProvince" name="subProvince" disabled={APIErrors.subProvinces || isSubmitting} required={true} onChange={OfferForm.handleChange} className="p-4 w-full border disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed border-gray-200 outline-none  focus:border-[#AA530E] focus:text-[#AA530E] focus:placeholder:text-[#AA530E]">
                            {subProvinces?.map((subProvince) => (
                                <option key={subProvince.id}>
                                    {subProvince.name}
                                </option>
                            ))}
                        </select>
                        {errors.subProvince && (<span className="text-red-500 mt-2">{errors.subProvince}</span>)}
                    </div>
                </div>

                <textarea
                    onChange={OfferForm.handleChange}
                    disabled={isSubmitting}
                    className="p-4  w-full border min-h-[150px] resize-none disabled:text-gray-500 border-gray-200 outline-none  focus:border-[#AA530E] focus:text-[#AA530E] focus:placeholder:text-[#AA530E]" 
                    placeholder="Mesajınız">
                </textarea>

                <button type="submit" className='animate__animated group p-4 text-center transition-all ease-in-out bg-[#AA530E] hover:bg-black  gap-4 text-white'>
                    {isSubmitting ? 'Lütfen bekleyin' : 'Gönder'}
                </button>
            </form>
        )
    }

    return(
        <Modal {...Props.Modal}>
            <Modal.Button {...Props.ModalTrigger}>
                <label className="leading-tight text-left">Kentsel Dönüşüm Başvurusu</label>
                <span className="material-symbols-outlined">arrow_right_alt</span>
            </Modal.Button>

            <Modal.Title>Kentsel Dönüşüm Talebi Oluştur</Modal.Title>

            <Modal.Content>
                <div className="w-full grid grid-cols-1">
                    <div>
                        <FormResultState type="success"/>
                    </div>
                </div>
            </Modal.Content>
        </Modal>
    )
}