import { Routes, Route } from 'react-router'
import Home from '@pages/Home'
import Blog from '@pages/Blog'
import Contact from '@pages/Contact'
import Error404 from '@pages/Error'
import Features from '@pages/Features'
import Login from '@pages/Login'
import Pricing from '@pages/Pricing'
import routes from '@data/routes'

const AllRoutes = () => {
    const [blog, contact, error, features, login, pricing] = routes
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path={`/${blog.url}`} element={<Blog />} />
            <Route path={`/${contact.url}`} element={<Contact />} />
            <Route path={`/${error.url}`} element={<Error404 />} />
            <Route path={`/${features.url}`} element={<Features />} />
            <Route path={`/${login.url}`} element={<Login />} />
            <Route path={`/${pricing.url}`} element={<Pricing />} />
        </Routes>
    )
}

export default AllRoutes
