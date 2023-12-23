import classNames from "classnames"
import { createElement } from "react"

export default function Grid({
    cols, 
    gap, 
    desktop,
    mobile,
    gapHorizontal, 
    gapVertical, 
    children
}) {    
    return createElement('div', {
        className: classNames(
            `grid`, {
                [``]: (mobile),
                [`grid-cols-${cols?.toString()}`]: (cols),
                [`gap-${gap?.toString()}`]: (gap),
                [`gap-x-${gapHorizontal?.toString()}`]: (gapHorizontal),
                [`gap-y-${gapVertical?.toString()}`]: (gapVertical),
                [`lg:grid-cols${desktop?.toString()} xl:grid-cols${desktop?.toString()} 2xl:grid-cols${desktop?.toString()}`]: (desktop),
            })
    }, children)
}