import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Row,
    Section,
    Tailwind,
    Text,
} from '@react-email/components';


export default function ContactFormTemplate({type, name, surname, phone, mail, message}) {
    const previewText = `${name} ${surname} tarafından ${type === 'contact' ? 'iletişim formu oluşturuldu, lütfen cevap verin' : 'kentsel dönüşüm talebi oluşturuldu!'}`;

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Body className="bg-white my-auto mx-auto font-sans">
                    <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[500px]">
                        <Section className="mt-[32px]"></Section>
                        <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                            {`${name} Kentsel Dönüşüm Talebi Oluşturdu!`}
                        </Heading>
                        <Section className='p-4 bg-gray-100 my-4'>
                            <Row>
                                <Text className='font-bold'>Adı & Soyadı</Text>
                            </Row>
                            <Row>
                                <Text>{`${name} ${surname}`}</Text>
                            </Row>
                            <Row>
                                <Text className='font-bold'>Telefon Numarası</Text>
                            </Row>
                            <Row>
                                <Text>{phone}</Text>
                            </Row>
                            <Row>
                                <Text className='font-bold'>Mesajı</Text>
                            </Row>
                            <Row>
                                <Text>{message}</Text>
                            </Row>
                        </Section>
                        <Section className="text-center mt-[32px] mb-[32px]">
                            <Button
                                pX={20}
                                pY={12}
                                className="bg-[#000000] rounded text-white text-[12px] p-10 font-semibold no-underline text-center"
                                href={`tel:${phone}`}
                            >
                                Ara
                            </Button>

                            <Button
                                pX={20}
                                pY={12}
                                className="bg-[#000000] rounded text-white text-[12px] p-10 font-semibold no-underline text-center"
                                href={`mailto:${mail}`}
                            >
                                Yanıt Gönder
                            </Button>
                    </Section>
                    <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
                    <Text className="text-[#666666] text-[12px] leading-[24px]">
                        Bu Email <strong>The Code Republic</strong> tarafından gönderilmiştir ve korunmaktadır.
                    </Text>
                </Container>
            </Body>
        </Tailwind>
        </Html>
    );
};