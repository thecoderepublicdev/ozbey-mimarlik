import Modal from "@components/shared/Modal";
import { useEffect, useState } from "react";
import { Switch } from '@headlessui/react'
import Image from "next/image";


export default function OfferButton() {
    const [provinces, setProvinces] = useState([]);
    const [selectedCity, setSelectedCity] = useState(1);
    const [subProvinces, setSubProvinces] = useState([])
    const [ownerStatus, setOwnerStatus] = useState(false);

    useEffect(function() {
        fetch('https://turkiyeapi.cyclic.app/api/v1/provinces')
        .then((response) => response.json())
        .then((response) => setProvinces(response.data))

        fetch('https://turkiyeapi.cyclic.app/api/v1/provinces/1')
        .then((response) => response.json())
        .then((response) => setSubProvinces(response.data.districts))
    }, []);

    useEffect(function() {
        fetch(`https://turkiyeapi.cyclic.app/api/v1/provinces/${selectedCity}`)
        .then((response) => response.json())
        .then((response) => setSubProvinces(response.data.districts))
    }, [selectedCity]);

    console.log(provinces);

    return(
        <Modal title="Kentsel Dönüşüm Başvurusu Oluştur">
            <Modal.Trigger className="group p-9 transition-all ease-in-out bg-[#AA530E] hover:bg-black flex items-center gap-4 text-white h-full">
                <label>Kentsel Dönüşüm Başvurusu</label>
                <span className="material-symbols-outlined">arrow_right_alt</span>
            </Modal.Trigger>

            <Modal.Content>
                <div className="w-[600px] grid grid-cols-1">
                    <div className="bg-[#AA530E] overflow-hidden max-h-[200px] relative">
                        <Image
                            src={require("../../../assets/images/kentsel-donusum-form-image.jpg")}
                            className="w-full h-full object-cover object-center m-0 p-0 opacity-20"
                            priority={true}
                            alt="Kentsel Dönüşüm Başvuru Formu"
                        />
                        <h1 className="absolute bottom-0 p-9 text-white text-4xl font-bold">Kentsel Dönüşüm Başvurusu Oluştur</h1>
                    </div>

                    <div>
                        <form className="p-6 grid gap-4">
                            <input type="text" placeholder="Adınız & Soyadınız" className="p-4  w-full border border-gray-200 outline-none focus:border-[#AA530E] focus:text-[#AA530E] focus:placeholder:text-[#AA530E]"/>
                            <input type="tel" placeholder="Telefon Numaranız" className="p-4  w-full border border-gray-200 outline-none focus:border-[#AA530E] focus:text-[#AA530E] focus:placeholder:text-[#AA530E]"/>
                            
                            <div className="grid grid-cols-2 gap-4">
                                <select onChange={(e) => setSelectedCity(e.target.value)} className="p-4  w-full border border-gray-200 outline-none  focus:border-[#AA530E] focus:text-[#AA530E] focus:placeholder:text-[#AA530E]">
                                    {provinces.map((province) => (
                                        <option key={province.id} value={province.id}>
                                            {province.name}
                                        </option>
                                    ))}
                                </select>

                                <select className="p-4 w-full border border-gray-200 outline-none  focus:border-[#AA530E] focus:text-[#AA530E] focus:placeholder:text-[#AA530E]">
                                    {subProvinces.map((subProvince) => (
                                        <option key={subProvince.id}>
                                            {subProvince.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="flex justify-between items-center p-4 bg-gray-100 ">
                                <label className="w-full block" for="owner">Bina Sahibi Misiniz?</label>
                                <Switch
                                    id="owner"
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

                            <textarea className="p-4  w-full border min-h-[150px] resize-none border-gray-200 outline-none  focus:border-[#AA530E] focus:text-[#AA530E] focus:placeholder:text-[#AA530E]" placeholder="Mesajınız">

                            </textarea>

                            <button type="submit" className="group p-4 text-center transition-all ease-in-out bg-[#AA530E] hover:bg-black  gap-4 text-white">
                                Gönder
                            </button>
                        </form>
                    </div>
                </div>
            </Modal.Content>
        </Modal>
    )
}