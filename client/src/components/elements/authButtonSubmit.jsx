export default function ButtonSubmit(props) {
    const {type, children, modalId} = props

    const handleClick = () => {
        document.getElementById(modalId).showModal()
    }

    return (
        <>
            <button
                type={type}
                onClick={modalId ? handleClick : null} 
                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
            >
                {children}
            </button>
        </>
    )
}