import { Field, Formik } from "formik";
import { useEffect } from "react";
import * as Yup from 'yup';

const Fields = [
    {
        type: 'text',
        name: 'fullName',
        placeholder: 'Adınız & Soyadınız',

    },
    {
        type: 'email',
        name: 'email',
        placeholder: 'E-Posta Adresiniz',
    },
    {
        type: 'phone',
        name: 'tel',
        placeholder: 'Telefon Numaranız',
    },
    {
        as: 'textarea',
        name: 'tel',
        placeholder: 'Mesajınız',
    }
];

export default function ContactForm() {
    const Props = {
        Formik: {
            initialValues: {
                fullName: "",
                email: "",
                phone: "",
                city: "",
                province: "",
                message: ""
            },
            validationSchema: Yup.object().shape({
                
            }),
            onSubmit: (values, {setSubmitting}) => {
                
            }
        },
    }

    useEffect(() => {

    }, [])

    return(
        <Formik {...Props.Formik}>
            {({values,errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
                <form  className='grid gap-4' onSubmit={handleSubmit}>
                    {console.log(errors)}
                    {Fields.map((field, key) => (
                        <Field 
                            {...field}
                            key={key}
                            className="border-2 border-gray-100 p-4 outline-none focus:border-brand-primary"
                        />
                    ))}
                    <button type="submit" className="w-full min-h-[60px] text-center p-4 bg-brand-primary text-white">Gönder</button>
                </form>
            )}
        </Formik>
    )
}