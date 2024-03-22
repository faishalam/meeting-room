export default function ModalInput(props) {
    const {label, type, name, id, placeholder, value, onChange} = props
    return (
        <>
            <label className="mr-2 text-gray-800 font-semibold">{label}</label>
            <input
                className="pl-2 outline-none border-none"
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
        </>
    )
}