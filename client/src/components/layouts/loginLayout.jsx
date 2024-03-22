import AuthTitle from "../fragments/auth/authTitle"
import AuthFormLogin from "../fragments/auth/authLoginForm"
import AuthImage from "../elements/authImage"

export default function LoginLayout() {
    return (
        <section className="relative flex flex-wrap lg:h-screen lg:items-center">
            <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
               <AuthTitle title={'Welcome back!'}>
                    Login
               </AuthTitle>
                
                <AuthFormLogin/>

            </div>

            <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                <AuthImage 
                    src="https://i.pinimg.com/564x/19/05/cf/1905cfc30c9780d808a0b371ad11beb5.jpg"
                />
            </div>
        </section>
    )
}