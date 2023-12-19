import classNames from "classnames"
import { createElement } from "react";

function Title({level, children}) {
    return createElement(level, {
        className: 'text-4xl font-bold text-brand-primary',
    }, children);
}

function Description({children}) {
    return createElement('p', {
        className: classNames(
            'mb-8 font-light text-black/50 lg:mb-16 sm:text-xl'
        )
    }, children)
}
function SubTitle({children}) {
    return createElement('label', {
        className: classNames(
            ''
        )
    }, children)
}
function CallToAction({link, icon, children}) {
    return(
        <a href={link} className="transition-all ease-in-out cursor-pointer py-4 px-10 text-lg hover:bg-brand-primary hover:text-white text-brand-primary border-2 border-brand-primary flex gap-4 items-center align-center justify-center">
            <label>{children}</label>
            {icon && <span className="material-symbols-outlined">{icon}</span>}
        </a>
    )
}

export default function SectionHeader({children}) {
    const Props = {
        Container: {
            id: 'SectionHeader',
            className: classNames(
                'flex justify-between items-center align-center content-center'
            )
        },
        ContainerContext: {
            className: classNames(
                'grid gap-4 place-content-center align-center'
            )
        },
    }

    const Components = {
        Title: children.filter(t => t.type === Title),
        SubTitle: children.filter(t => t.type === SubTitle),
        Description: children.filter(t => t.type === Description),
        CallToAction: children.filter(t => t.type === CallToAction),
    };

    return(
        <div {...Props.Container}>
            <div {...Props.ContainerContext}>
                {Components.SubTitle}
                {Components.Title}
                {Components.Description}
            </div>

            {Components.CallToAction}
        </div>
    )
}

SectionHeader.Title = Title;
SectionHeader.Description = Description;
SectionHeader.SubTitle = SubTitle;
SectionHeader.CallToAction = CallToAction;