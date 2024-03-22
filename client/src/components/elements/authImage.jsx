export default function AuthImage(props) {
    const {src} = props
    return (
        <>
            <img
                alt=""
                src={src}
                className="absolute inset-0 h-full w-full object-cover"
            />
        </>
    )
}