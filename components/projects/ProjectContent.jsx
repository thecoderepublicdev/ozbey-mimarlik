import Title from "@components/shared/Title"
import { memo } from "react"

function _Title({children}) {
    return <Title level="h1">{children}</Title>
}

function Gallery({children}) {
    return <></>
}

function Specs({children}) {
    return <></>
}

function RoomCount({children}) {
    return <>I'm RoomCount</>
}

export default function ProjectContent({children}) {
    const Childrens = {
        _Title: children.filter(c => c.type === _Title),
        Gallery: children.filter(c => c.type === Gallery),
        Specs: children.filter(c => c.type === Specs),
    }

    return(
        <div className='container mx-auto max-w-screen-2xl'>
            {Childrens._Title}
        </div>
    )
}

ProjectContent.Title = _Title;
ProjectContent.Gallery = Gallery;
ProjectContent.Specs = Specs;
Specs.RoomCount = RoomCount;