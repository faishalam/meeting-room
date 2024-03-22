
import AuthTitle from "../fragments/auth/authTitle"
import AuthImage from "../elements/authImage"
import AuthFormRegister from "../fragments/auth/authRegisterForm"


export default function RegisterLayout() {
    return (
        <section className="relative flex flex-wrap lg:h-screen lg:items-center">
            <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">

               <AuthTitle title={'Welcome, Create new account!'}>
                    Register
               </AuthTitle>
                
                <AuthFormRegister/>

            </div>

            <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                <AuthImage/>
            </div>
        </section>
    )
}