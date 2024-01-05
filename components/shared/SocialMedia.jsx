import dynamic from 'next/dynamic'

export default function SocialMedia({name, link}) {
    const Icon = dynamic(async () => await import(`./icons/${name}`), {
        loading: () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataslot="icon" className="w-6 h-6 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>
    })

    return(
        <a href={link} className='group text-white p-6 w-10 h-10 border border-white rounded-full grid place-content-center place-items-center group-hover:border-brand-primary'>
            <Icon/>
        </a>
    )
}
