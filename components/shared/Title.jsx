import { useApplication } from "@hooks/Application";
import classNames from "classnames";
import { createElement } from "react";

export default function Title({level, children}) {
    const {PrimaryFont} = useApplication();

    return createElement(level, {
        className: classNames(
            'font-bold tracking-tighter text-brand-primary', PrimaryFont, {
                'text-7xl': level === 'h1',
                'text-6xl': level === 'h2',
                'text-5xl': level === 'h3',
                'text-4xl': level === 'h4',
                'text-3xl': level === 'h5',
            }
        )
    }, children)
}