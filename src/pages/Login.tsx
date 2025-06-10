import LandingLayout from '@layouts/LandingLayout'
import { NavLink } from 'react-router'

function Login() {
    return (
        <LandingLayout>
            <p className="mx-auto max-w-xl text-2xl py-15 font-bold text-blue-900 lg:text-3xl text-center">
                Please try returning to the <NavLink to="/">Front Page</NavLink>
                .
            </p>
        </LandingLayout>
    )
}

export default Login
