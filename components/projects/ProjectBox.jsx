import { useState } from 'react'
import createSlug from '@hooks/createSlug';
import classNames from 'classnames';
import Link from 'next/link';

function Thumbnail({children}) {
    return(
        <img src={children} className='w-full group-hover:grayscale-0 !grayscale-100 h-[400px] object-cover'/>
    )
}

function Status({children}) {
    const [label, setLabel] = useState(children === 'COMPLETED' ? 'Tamamlandı' : 'Devam Ediyor');

    return(
        <div className={classNames('px-6 py-2 w-fit rounded-xl uppercase', {
            'bg-gradient-to-br from-green-600/50 to-transparent text-white': children === 'COMPLETED',
            'bg-gradient-to-br from-yellow-600/50 to-transparent text-white': children === 'NOT_COMPLETED'
        })}>{label}</div>
    )
}

function Name({children}) {
    return <h2 className='font-bold text-2xl'>{children}</h2>
}

export default function ProjectBox({id, children}) {
    const Childrens = {
        Thumbnail: children.filter(c => c.type === Thumbnail),
        Status: children.filter(c => c.type === Status),
        Name: children.filter(c => c.type === Name),
    }
    
    return(
        <div id='project-box' className='group relative rounded-xl overflow-hidden'>
            {Childrens.Thumbnail}
            
            <div className='absolute bottom-4 rounded-xl flex justify-between align-center items-center content-center flex-row right-4 left-4 p-4 backdrop-blur-md bg-black/50 text-white'>
                <div className='grid gap-4'>
                    {Childrens.Status}
                    {Childrens.Name}
                </div>

                <Link
                    target='_blank'
                    as={`/projelerimiz/${createSlug(Childrens.Name[0]?.props.children)}`}
                    href={{
                        pathname: `/projelerimiz/${createSlug(Childrens.Name[0]?.props.children)}`,
                        query: {
                            projectID: id
                        }
                    }} 
                    title={Childrens.Name[0]?.props?.children} className='grid w-12 h-12 place-content-center place-items-center rounded-full border border-white group-hover:bg-white group-hover:text-black transition-all ease-in-out'
                    >
                    <span className='material-symbols-outlined'>arrow_forward</span>
                </Link>
            </div>
        </div>
    )
}

ProjectBox.Thumbnail = Thumbnail
ProjectBox.Status = Status
ProjectBox.Name = Name