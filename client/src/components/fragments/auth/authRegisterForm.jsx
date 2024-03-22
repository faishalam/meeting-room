import { useState } from "react"
import { heroService } from "../../../services/hero"
import { useNavigate } from "react-router-dom"
import ButtonSubmit from "../../elements/authButtonSubmit";
import InputAuth from "../../elements/authInput";
import AuthButtom from "../../elements/authButtom";

export default function AuthFormRegister() {
    const [formRegister, setFormRegister] = useState({
        email: '',
        name: '',
        password: ''
    });
    const [error, setError] = useState('')

    const navigate = useNavigate()

    const handleChange = () => {
        setFormRegister({
            ...formRegister,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await heroService.post("/register", formRegister)
            navigate('/login')
        } catch (error) {
            setError(error.response.data.message)
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                {error && <p className="text-red-500 text-xs">*{error}</p>}

                <InputAuth
                    label="Name"
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    value={formRegister.name}
                    onChange={handleChange}
                />

                <InputAuth
                    label="Email address"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    value={formRegister.email}
                    onChange={handleChange}
                />

                <InputAuth
                    label="Password"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    value={formRegister.password}
                    onChange={handleChange}
                />

                <div className="flex items-center justify-between">
                    <AuthButtom title={"have an account?"} link={'/login'}>
                        Login
                    </AuthButtom>


                    <ButtonSubmit
                        type="submit"
                    >
                        Register
                    </ButtonSubmit>
                </div>
            </form>
        </>
    )


}