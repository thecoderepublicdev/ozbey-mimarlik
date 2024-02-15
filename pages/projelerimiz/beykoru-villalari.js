import Title from "@components/shared/Title";
import Layout from "../_layout";
import Container from "@components/layout/Container";
import classNames from "classnames";
import { BeykoruData } from "@data/Beykoru";

const SpecsTag = ({ icon, title, className, style}) => {
    return(
        <div className={classNames(
            'border border-brand-primary min-w-fit rounded-full animate__animated animate__fadeInUp col-start-auto text-brand-primary backdrop-blur-sm p-4 flex gap-4 justify-center align-center items-center content-center',
            className
        )} style={style}>
            <span className='material-symbols-outlined'>{icon}</span>
            <label>{title}</label>
        </div>
    )
}

export default function BeykoruVillalari() {
    return(
        <Layout>
            <Container>
                <div className="grid gap-4">
                    <Title level="h1">
                        {BeykoruData.title}
                    </Title>
                    <p className="text-xl text-gray-500">
                        {BeykoruData.subtitle}
                    </p>

                    <div className="grid grid-cols-6 justify-between gap-2">
                        {BeykoruData?.specs?.map((spec, key) => spec.isShowable && (
                            <SpecsTag key={key} icon={spec.icon} title={spec.title} />
                        ))}
                    </div>
                </div>

                {BeykoruData?.gallery.map((gallery, galleryIndex) => (
                    <div key={galleryIndex} className="my-8 grid gap-4">
                        <Title level="h2">{gallery.title}</Title>

                        <div className="grid grid-cols-3 gap-4">
                            {gallery?.photos.map((photoUri, galleryPhotosIndex) => (
                                <img
                                    key={galleryPhotosIndex}
                                    src={photoUri}
                                    className="w-full h-[300px]"
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </Container>
        </Layout>
    )
}