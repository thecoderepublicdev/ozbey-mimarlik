import classNames from "classnames";
import { createElement } from "react";

const Title = ({children}) => {
    return createElement('label', {
        className: 'font-bold text-xl'
    }, children)
}

const Description = ({children}) => {
    return createElement('label', {
        className: 'text-gray-500 text-center'
    }, children)
}

export default function Alert({type, children}) {
    const Childrens = {
        Title: children.filter(c => c.type === Title),
        Description: children.filter(c => c.type === Description),
    }

    const Props = {
        MainContainer: {
            className: classNames(
                'grid gap-4 place-content-center place-items-center'
            )
        },
        ContentContainer: {
            className: classNames(
                'grid gap-2 place-content-center place-items-center'
            )
        },
        IconContainer: {
            className: classNames(
                'w-20 h-20 grid place-content-center place-items-center rounded-full', {
                    'bg-red-100 text-red-500': type === 'error',
                    'bg-green-100 text-green-500': type === 'success',
                    'bg-yellow-100 text-yellow-500': type === 'warning',
                    'bg-blue-100 text-blue-500': type === 'info',
                }
            )
        },
        Icon: {
            className: 'material-symbols-outlined text-4xl'
        }
    }

    const Icon = () => {
        switch(type) {
            case 'error':
                return 'error'
                break;
            case 'warning':
                return 'warning'
                break
            case 'info':
                return 'info'
                break
            case 'success':
                return 'done_all'
                break;
        }
    }

    return(
        <aside {...Props.MainContainer}>
            <figure {...Props.IconContainer}>
                <span {...Props.Icon}>
                    <Icon/>
                </span>
            </figure>
            <div {...Props.ContentContainer}>
                {Childrens.Title}
                {Childrens.Description}
            </div>
        </aside>
    )
}

Alert.Title = Title;
Alert.Description = Description;