export default function IconBox({icon}){
    return (
        <div className="grid place-content-center place-items-center w-fit p-4 bg-brand-primary text-white">
            <span className="material-symbols-outlined !text-2xl">{icon}</span>
        </div>
    )
}