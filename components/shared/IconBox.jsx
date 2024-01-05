export default function IconBox({icon}){
    return (
        <div className="rounded grid place-content-center place-items-center w-16 h-16 text-2xl p-4 bg-brand-primary text-white">
            <span className="material-symbols-outlined !text-[32px]">{icon}</span>
        </div>
    )
}