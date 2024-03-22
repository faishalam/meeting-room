export default function AuthTitle(props) {
    const {title, children} = props
    return (
        <>
            <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">{title}</h1>
                <p className="mt-4 text-gray-500">
                    {children}
                </p>
            </div>
        </>
    )
}