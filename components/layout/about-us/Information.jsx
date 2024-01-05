import Title from '@components/shared/Title';
import CompanyInformations from '@data/CompanyInformations';
import { useApplication } from '@hooks/Application';
import classNames from 'classnames';

export default function Information(){
    const { PrimaryFont } = useApplication();

    return(
        <section className="bg-brand-secondary/10 min-h-screen grid place-items-center">
            <div className="py-8 px-4 mx-auto max-w-screen-2xl lg:py-16 lg:px-6">
                <div>
                    <Title level="h2">Bizi yakından tanıyın</Title>
                    <p className={classNames(
                        "mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl",
                        PrimaryFont
                    )}>1997'den günümüze kadar faaliyet gösteren şirketimizi sizlere tanıtmak isteriz.</p>
                </div> 
                <div className="grid gap-4 lg:grid-cols-2">
                    {CompanyInformations.map((information, id) => (
                        <div key={id} className="hover:drop-shadow-2xl transition-all ease-in-out flex flex-col justify-between gap-4 items-start p-8 bg-white md:p-12">
                            <Title level={"h3"}>{information.title}</Title>
                            <p className='text-gray-500'>{information.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}