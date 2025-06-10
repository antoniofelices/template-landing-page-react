import { Routes, Route } from 'react-router'
import Home from '@pages/Home'
import About from '@pages/About'
import Contact from '@pages/Contact'
import Error404 from '@pages/Error'
import Features from '@pages/Features'
import Pricing from '@pages/Pricing'
import routes from '@data/routes'

const AllRoutes = () => {
    const [about, contact, error, features, pricing] = routes
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path={`/${about}`} element={<About />} />
            <Route path={`/${contact}`} element={<Contact />} />
            <Route path={`/${features}`} element={<Features />} />
            <Route path={`/${pricing}`} element={<Pricing />} />
            <Route path={`/${error}`} element={<Error404 />} />
        </Routes>
    )
}

export default AllRoutes
