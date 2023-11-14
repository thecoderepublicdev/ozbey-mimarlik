import Companies from '@data/Companies';
import Image from 'next/image';
import classNames from 'classnames';
import Modal from '@components/shared/Modal';
import { Syne } from 'next/font/google';

const syne = Syne({subsets: ['latin']});

export default function CompaniesBox() {
    return(
        <div className='grid gap-4 grid-cols-1 lg:grid-cols-3 h-full w-full'>
            {Companies.map((company, index) => (
                <Modal>
                    <Modal.Button>
                        <div key={index} className={classNames(
                            'border border-gray-100 cursor-pointer hover:drop-shadow-2xl bg-white transition-shadow ease-in-out group p-12 gap-4 lg:p-9 w-full h-full grid place-items-center text-center'
                        )}>
                            <Image
                                src={company.logo}
                                className={classNames(
                                    'w-24 h-24 animate__animated animate__fadeInUp animate__faster'
                                )}
                            />
                        </div>
                    </Modal.Button>

                    <Modal.Title>
                        <Image
                            src={company.logo}
                            className={classNames(
                                'w-24 h-24 animate__animated animate__fadeInUp animate__faster'
                            )}
                        />    
                    </Modal.Title>

                    <Modal.Content>
                    <div className='grid gap-4 text-left'>
                        <h2 className={classNames(
                            'text-bold text-2xl block animate__animated animate__fadeInUp animate__faster',
                            syne.className
                        )}>
                            {company.name}
                        </h2>
                        <p className={classNames(
                            'text-black/50 animate__animated animate__fadeInUp animate__faster'
                        )}>
                            {company.description}
                        </p>
                    </div>
                    </Modal.Content>
                </Modal>
            ))}
        </div>
    )
}