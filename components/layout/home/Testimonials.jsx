import TestimonialsBox from "@components/shared/TestimonialBox";
import Title from "@components/shared/Title";
import TestimonialsData from "@data/Testimonials";

export default function Testimonials() {
    return(
        <section className="min-h-screen grid place-items-center container max-w-screen-2xl mx-auto">
            <div className="py-4 px-8 mx-auto max-w-screen-2xl lg:py-4 lg:px-6">
                <div className="grid gap-4">
                    <Title level="h2">Bize değil, onlara güvenin</Title>
                    <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl">Teslim ettiğimiz projelerden sonra müşterilerimiz tarafından bize iletilen yorumlar</p>
                </div> 
                <div className="grid gap-4 lg:grid-cols-3">
                    {TestimonialsData.map((person, id) => (
                        <TestimonialsBox key={id}>
                            <TestimonialsBox.Comment>{person.comment}</TestimonialsBox.Comment>
                            <TestimonialsBox.Name>{person.name}</TestimonialsBox.Name>
                            <TestimonialsBox.Title>{person.title}</TestimonialsBox.Title>
                        </TestimonialsBox>
                    ))}
                </div>
            </div>
        </section>
    )
}