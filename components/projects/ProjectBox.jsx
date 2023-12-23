function Thumbnail({children}) {
    return children
}

function Status({children}) {

}

function Name({children}) {

}

export default function ProjectBox({children}) {
    const Childrens = {
        Thumbnail: children.filter(c => c.type === Thumbnail),
        Status: children.filter(c => c.type === Status),
        Name: children.filter(c => c.type === Name),
    }

    console.log(Childrens.Thumbnail);
    
    return(
        <div>

        </div>
    )
}

ProjectBox.Thumbnail = Thumbnail
ProjectBox.Status = Status
ProjectBox.Name = Name