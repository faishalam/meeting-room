import ButtonSubmit from "../../elements/authButtonSubmit"
import InputAuth from "../../elements/authInput"
import AuthButtom from "../../elements/authButtom"
import { useState } from "react"
import { heroService } from "../../../services/hero"
import { useNavigate } from "react-router-dom"

export default function AuthFormLogin() {
    const [formLogin, setFormLogin] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('')

    const navigate = useNavigate()

    const handleChange = () => {
        setFormLogin({
            ...formLogin,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const {data} = await heroService.post("/login", formLogin)
            localStorage.setItem("access_token", data.access_token)
            navigate('/')
        } catch (error) {
            setError(error.response.data.message)
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                {error && <p className="text-red-500 text-xs">*{error}</p>}

                <InputAuth
                    label="Email address"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    value={formLogin.email}
                    onChange={handleChange}
                />

                <InputAuth
                    label="Password"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    value={formLogin.password}
                    onChange={handleChange}
                />

                <div className="flex items-center justify-between">
                    <AuthButtom title={"Don't have an account?"} link={'/register'}>
                        Register
                    </AuthButtom>

                    <ButtonSubmit
                        type="submit"
                    >
                        Login
                    </ButtonSubmit>
                </div>
            </form>
        </>
    )


}