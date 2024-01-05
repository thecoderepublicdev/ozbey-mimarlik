import axios from 'axios'

export default async function sendMail({body}) {
    await axios({
        method: 'POST',
        url: '/api/mail/send',
        data: body
    })
    .then((response) => {
        console.log("[sendMail() Response Handler]", response);
        return response.data
    })
    .catch((error) => {
        console.error("[sendMail() Error Handler]", error)
    })
}