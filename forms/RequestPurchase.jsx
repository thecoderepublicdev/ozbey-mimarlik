import classNames from "classnames"

export default function RequestPurchaseForm({title}) {
    const inputClassName = classNames(
        'p-4  w-full border border-gray-200 outline-none focus:border-[#AA530E] focus:text-[#AA530E] focus:placeholder:text-[#AA530E]'
    )
    return(
        <form className="grid gap-4 p-9">
            <label className="text-2xl">{title}</label>
        </form>
    )
}