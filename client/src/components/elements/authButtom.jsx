import { Link } from "react-router-dom"

export default function AuthBottom(props) {
    const { title, link, children } = props
    return (
        <>
            <p className="text-sm text-gray-500">
                {title}
                <Link to={link} className="underline">
                    {children}
                </Link>
            </p>
        </>
    )
}