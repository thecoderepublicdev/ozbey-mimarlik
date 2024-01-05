import nodemailer from "nodemailer";
import ContactFormTemplate from "@templates/email/ContactForm";
import { render } from '@react-email/render';

async function MailSendHandler(req, res) {    
    if(req.method === 'POST') {
        const { formType } = req.body;
        const { firstName, lastName, message, phone, email } = req.body;
        let fullName = `${firstName} ${lastName}`;
    
        const RenderedEmailContent = await render(
            <ContactFormTemplate 
                type={formType}
                name={firstName} 
                surname={lastName} 
                phone={phone} 
                mail={email}
                message={message}
            />, {
            pretty: true
        });
    
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
                res.status(500).json({ success: false, _info: info, message: 'Internal Server Error', errorDetails: error });
            } else {
                res.status(200).json({ success: true });
            }
        });
    } else {
        res.status(400).json({success: false, message: 'Wrong method!'})
    }
}

export default MailSendHandler