import { useApplication } from "@hooks/Application";
import { createElement, memo } from "react";
import classNames from "classnames";


function Title({level, children}) {
    const { PrimaryFont } = useApplication();

    return createElement(level, {
        className: classNames(
            'font-bold tracking-tighter text-brand-primary', PrimaryFont, {
                'lg:text-7xl md:text-5xl text-4xl': level === 'h1',
                'lg:text-6xl md:text-4xl text-2xl': level === 'h2',
                'text-4xl': level === 'h3',
                'text-3xl': level === 'h4',
                'text-2xl': level === 'h5',
            }
        )
    }, children)
}

export default memo(Title)