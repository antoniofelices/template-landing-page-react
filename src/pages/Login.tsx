import AuthLayout from '@/layouts/AuthLayout'
import { NavLink } from 'react-router'
import Container from '@components/base/Container'

function Login() {
    return (
        <AuthLayout>
            <Container>
                <div className="place-content-center h-screen">
                    <h1 className="text-blue-900 lg:text-3xl text-center">
                        TODO
                    </h1>
                    <p className="text-blue-900 text-center">
                        Please try returning to the{' '}
                        <NavLink to="/">Front Page</NavLink>.
                    </p>
                </div>
            </Container>
        </AuthLayout>
    )
}

export default Login
