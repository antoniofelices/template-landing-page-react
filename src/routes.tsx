import { Routes, Route } from 'react-router'
import Home from '@pages/Home'
import Contact from '@pages/Contact'
import Error404 from '@pages/Error'
import Features from '@pages/Features'
import Login from '@pages/Login'
import Pricing from '@pages/Pricing'
import routes from '@data/routes'

const AllRoutes = () => {
    const [contact, error, features, login, pricing] = routes
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path={`/${contact}`} element={<Contact />} />
            <Route path={`/${error}`} element={<Error404 />} />
            <Route path={`/${features}`} element={<Features />} />
            <Route path={`/${login}`} element={<Login />} />
            <Route path={`/${pricing}`} element={<Pricing />} />
        </Routes>
    )
}

export default AllRoutes
