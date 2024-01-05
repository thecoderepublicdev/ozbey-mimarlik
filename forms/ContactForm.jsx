import React from 'react';
import * as Yup from 'yup';
import "yup-phone-lite";
import { ErrorMessage, Field, Form, Formik } from "formik";
import classNames from "classnames";
import axios from 'axios';
import { useState } from 'react';
import Alert from '@components/shared/Alert';
import sendMail from '@hooks/sendMail';

function ContactFormFields({ errors, status, touched, isSubmitting, setFieldValue }) {
    const Fields = [
        {
            name: "firstName",
            placeholder: "Adınız",
            type: "text",
            states: {
                touch: touched.firstName,
                error: errors.firstName,
            }
        },
        {
            name: "lastName",
            placeholder: "Soyadınız",
            type: "text",
            states: {
                touch: touched.lastName,
                error: errors.lastName,
            }
        },
        {
            name: "email",
            placeholder: "E-Posta Adresiniz",
            type: "email",
            states: {
                touch: touched.email,
                error: errors.email,
            }
        },
        {
            name: "phone",
            placeholder: "Telefon Numaranız",
            type: "phone",
            states: {
                touch: touched.phone,
                error: errors.phone,
            }
        },
        {
            customRender: true,
            customRenderContent: (
                <React.Fragment key={555}>
                    <Field
                        id="message"
                        name="message"
                        as="textarea"
                        disabled={isSubmitting}
                        placeholder="Mesajınız"
                        className={classNames(
                            'rounded p-4 border-2 bg-gray-100 !border-transparent outline-none focus:border-brand-primary disabled:cursor-not-allowed disabled:opacity-50 resize-none max-h-[400px] focus:text-brand-primary', {
                                '!border-red-500 bg-red-50 text-red-500': touched.message && errors.message
                            }
                        )}
                        onChange={(e) => setFieldValue("message", e.target.value)}
                    />
                    <ErrorMessage name="message" component="div" className="text-red-500 mt-2"/>
                </React.Fragment>
            )
        },
    ];

    return(
        <Form className="grid gap-4">
            {Fields.map((field, key) => !field.customRender ? (
               <div key={key} className="grid">
                    <Field
                        name={field.name}
                        type={field.type}
                        disabled={isSubmitting}
                        placeholder={field.placeholder}
                        className={classNames(
                            'rounded p-4 border-2 bg-gray-100 outline-none focus:border-brand-primary disabled:cursor-not-allowed disabled:opacity-50 focus:text-brand-primary', {
                                '!border-red-500 bg-red-50 text-red-500': field.states.touch && field.states.error
                            }
                        )}
                    />
                    <ErrorMessage name={field.name} component="div" className="text-red-500 mt-2"/>
               </div> 
            ) : field.customRenderContent)}

            <button type="submit" className="rounded p-4 bg-brand-primary text-center font-bold text-lg text-white disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50" disabled={isSubmitting}>
                {isSubmitting ? 'Lütfen Bekleyin...' : 'Gönder'}
            </button>
        </Form>
    )
}

export default function ContactForm({type}) {
    const [IF_FORM_SENDED, setFormSentStatus] = useState();
    
    const Props = {
        Formik: {
            initialValues: {
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                message: ""
            },
            validationSchema: Yup.object().shape({
                firstName: Yup.string().required('İsim belirtmek zorunludur.'),
                lastName: Yup.string().required('Soyisim belirtmek zorunludur.'),
                email: Yup.string().email('Lütfen geçerli bir email adresi giriniz.').required('E-Posta adresi belirtmek zorunludur.'),
                phone: Yup.string().phone("TR", 'Lütfen Türkiye Cumhuriyeti için geçerli bir telefon numarası girin').required('Telefon Numarası belirtmek zorunludur.'),
                message: Yup.string()
            }),
            onSubmit: async (values, { setSubmitting, resetForm }) => {
                setSubmitting(true);

                const response = await sendMail({
                    body: {
                        formType: type,
                        ...values
                    }
                })
                
                setSubmitting(false)
                setFormSentStatus(response.success)
            }
        }
    } 

    return(
        <Formik {...Props.Formik}>
            {(typeof IF_FORM_SENDED === 'boolean') ? (
                <Alert type={IF_FORM_SENDED ? 'success' : 'error'}>
                    <Alert.Title>
                        {IF_FORM_SENDED ? 'Bizimle iletişime geçtiğiniz teşekkürler' : 'Bir hata oluştu!'}
                    </Alert.Title>
                    <Alert.Description>
                        {IF_FORM_SENDED ? 'Ekibimiz 48 saat içerisinde sizlerle iletişime geçecektir. Bizi tercih ettiğiniz için teşekkürler' : 'Form gönderilirken bir hata oluştu, teknik ekibimize konu hakkında bildiri geçtik, tekrardan dener misiniz?'}
                    </Alert.Description>
                </Alert>
            ) : (props) => <ContactFormFields {...props} />}
            
        </Formik>
    )
}