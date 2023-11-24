import nodemailer from "nodemailer";
import OfferMailTemplate from "../../../templates/email/Offer";
import { render } from '@react-email/render';

export default async function (req, res) {    
    const { fullName, message, city, phone, subProvince, owner, email } = req.body;


    const RenderedEmailContent = render(
        <OfferMailTemplate 
            fullName={fullName} 
            phone={phone} 
            city={city}
            mail={email}
            subProvince={subProvince}
            message={message}
        />, {
        pretty: true
    });

    console.log("[API] Email Template Render Completed");

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GOOGLE_ACCOUNT_EMAIL,
            pass: process.env.GOOGLE_ACCOUNT_APP_PASSWORD,
        },
    });

    const mailOptions = {
        from: `${fullName} <${process.env.GOOGLE_ACCOUNT_EMAIL}>`,
        to: 'cenk@thecoderepublic.dev',
        subject: `Yeni Kentsel Dönüşüm Talebi!`,
        html: RenderedEmailContent
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error', errorDetails: error });
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json({ success: true });
        }
    });
}