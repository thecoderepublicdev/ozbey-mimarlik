import { useEffect, useState } from "react";
import { Switch } from '@headlessui/react'
import { useFormik } from "formik";
import classNames from "classnames";
import * as Yup from 'yup';
import { useHeader } from ".";
import Modal from '@shared/Modal';

export default function OfferButton() {
    const [selectedCity, setSelectedCity] = useState(1);
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
            className: "p-6 transition-all ease-in-out bg-brand-primary hover:bg-black flex items-center gap-4 text-white h-full"
        } 
    }

    const { values, errors, touched, handleSubmit, isSubmitting } = useFormik({
        initialValues: {
            name: "",
            phone: "",
            city: "",
            subProvince: "",
            owner: false,
            message: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Ad & Soyad zorunludur'),
            phone: Yup.string().required('Telefon numarası iletişim için zorunludur.'),
            city: Yup.string().required('İl bilgisi zorunludur'),
            subProvince: Yup.string().required('İlçe bilgisi zorunludur'),
            owner: Yup.string().required('Bina sahipliği bilgisi zorunludur'),
        }),
        onSubmit: (values) => {
            console.log(values);
            alert("Form bilgileri console'a gönderildi")
        }
    });

    useEffect(function() {
        console.log("Errors: ", errors)
    }, [errors]);

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

    return(
        <Modal {...Props.Modal}>
            <Modal.Button {...Props.ModalTrigger}>
                <label>Kentsel Dönüşüm Başvurusu</label>
                <span className="material-symbols-outlined">arrow_right_alt</span>
            </Modal.Button>

            <Modal.Title>Kentsel Dönüşüm Talebi Oluştur</Modal.Title>

            <Modal.Content>
                <div className="w-full grid grid-cols-1">
                    <div>
                        <form className="grid gap-4">
                            <input required={true} type="text" placeholder="Adınız & Soyadınız" className="p-4  w-full border border-gray-200 outline-none focus:border-[#AA530E] focus:text-[#AA530E] focus:placeholder:text-[#AA530E]"/>
                            <input required={true} type="tel" placeholder="Telefon Numaranız" className="p-4  w-full border border-gray-200 outline-none focus:border-[#AA530E] focus:text-[#AA530E] focus:placeholder:text-[#AA530E]"/>
                            
                            <div className="grid grid-cols-2 gap-4">
                                <select disabled={APIErrors.provinces} required={true} onChange={(e) => setSelectedCity(e.target.value)} className="p-4  w-full border border-gray-200 outline-none disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed  focus:border-[#AA530E] focus:text-[#AA530E] focus:placeholder:text-[#AA530E]">
                                    {provinces?.map((province) => (
                                        <option key={province.id} value={province.id}>
                                            {province.name}
                                        </option>
                                    ))}
                                </select>

                                <select disabled={APIErrors.subProvinces} required={true} className="p-4 w-full border disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed border-gray-200 outline-none  focus:border-[#AA530E] focus:text-[#AA530E] focus:placeholder:text-[#AA530E]">
                                    {subProvinces?.map((subProvince) => (
                                        <option key={subProvince.id}>
                                            {subProvince.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="flex justify-between items-center p-4 bg-gray-100 ">
                                <label required={true} className="w-full block" htmlFor="owner">Bina Sahibi Misiniz?</label>
                                <Switch
                                    id="owner"
                                    required
                                    checked={ownerStatus}
                                    onChange={setOwnerStatus}
                                    className={`${ownerStatus ? 'bg-[#AA530E]' : 'bg-gray-200'}
                                    relative inline-flex h-[34px] w-[70px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                                >
                                    <span
                                    aria-hidden="true"
                                    className={`${ownerStatus ? 'translate-x-9' : 'translate-x-0'}
                                        pointer-events-none inline-block h-[30px] w-[30px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                    />
                                </Switch>
                            </div>

                            <textarea className="p-4  w-full border min-h-[150px] resize-none border-gray-200 outline-none  focus:border-[#AA530E] focus:text-[#AA530E] focus:placeholder:text-[#AA530E]" placeholder="Mesajınız"></textarea>

                            <button type="submit" className={classNames(
                                'animate__animated group p-4 text-center transition-all ease-in-out bg-[#AA530E] hover:bg-black  gap-4 text-white', 
                                {
                                    'animate__shakeX': values.length < 0,
                                }
                            )}>
                                {isSubmitting ? 'Lütfen bekleyin' : 'Gönder'}
                            </button>
                        </form>
                    </div>
                </div>
            </Modal.Content>
        </Modal>
    )
}