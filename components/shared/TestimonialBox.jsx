function Comment({children}) {
    return(
        <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500">
            <p className="my-4">{children}</p>
        </blockquote>
    )
}

function Name({children}) {
    return <div>{children}</div>
}

function Title({children}) {
    return <div className="text-sm font-light text-gray-500">{children}</div>
}

export default function TestimonialsBox({children}) {
    const Childrens = {
        Title: children.filter(c => c.type === Title),
        Comment: children.filter(c => c.type === Comment),
        Name: children.filter(c => c.type === Name)
    }
    return(
        <figure className="rounded-2xl border hover:drop-shadow-2xl transition-all ease-in-out flex flex-col justify-between items-start sm:p-8 p-4 bg-white md:p-12">
            {Childrens.Comment}
            <figcaption className="flex justify-start items-center">
                <div className="font-medium text-left">
                    {Childrens.Name}
                    {Childrens.Title}
                </div>
            </figcaption>    
        </figure>
    )
}

TestimonialsBox.Comment = Comment
TestimonialsBox.Name = Name
TestimonialsBox.Title = Title