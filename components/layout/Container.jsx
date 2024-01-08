export default function Container({children}) {
    return(
        <div className="max-w-screen-2xl mx-auto p-6 gap-4 py-12">
            {children}
        </div>
    )
}