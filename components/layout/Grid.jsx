import classNames from "classnames"
import { createElement } from "react"

export default function Grid({
    ref,
    cols, 
    gap, 
    desktop,
    mobile,
    gapHorizontal, 
    gapVertical, 
    children
}) {
    return createElement('div', {
        ref: ref ?? ref,
        className: classNames(
            `grid`, {
                [`gap-${gap?.toString()}`]: typeof gap === 'number',
                [`gap-x-${gapHorizontal?.toString()}`]: typeof gapHorizontal === 'number',
                [`gap-y-${gapVertical?.toString()}`]: typeof gapVertical === 'number',
                [`grid-cols-${cols?.toString()} lg:grid-cols-${desktop?.toString()} xl:grid-cols-${desktop?.toString()} 2xl:grid-cols-${desktop?.toString()}`]: typeof desktop === 'number',
            })
    }, children)
}