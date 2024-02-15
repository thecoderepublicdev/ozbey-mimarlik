import React from "react";
import Title from "@components/shared/Title"
import Container from "@components/layout/Container";


function _Title({children}) {
    return(
        <Title level="h1">{children}</Title>
    )
}

function Gallery({children}) {
    return(
        <div className="mt-4 grid gap-4 grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-3">
            {children?.map((item, key) => (
                <img
                    key={key}
                    className="object-cover w-full h-auto"
                    src={item}
                />
            ))}
        </div>
    )
}

function Specs({children}) {
    return <></>
}

function RoomCount({children}) {
    return <>I'm RoomCount</>
}

export default function ProjectContent({type, children}) {
    const Childrens = {
        _Title: children.filter(c => c.type === _Title),
        Gallery: children.filter(c => c.type === Gallery),
        Specs: children.filter(c => c.type === Specs),
    }

    console.log(Childrens.Gallery[0]?.props);
    console.log(Childrens.Gallery[0]?.props?.children);

    return(
        <Container>
            {Childrens._Title}
            {Childrens.Gallery}

            <div>

            </div>
        </Container>
    )
}

ProjectContent.Title = _Title;
ProjectContent.Gallery = Gallery;
ProjectContent.Specs = Specs;
Specs.RoomCount = RoomCount;