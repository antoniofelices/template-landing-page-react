import { Routes, Route } from 'react-router'
import Home from '@pages/Home'
import About from '@pages/About'
import Error404 from '@pages/Error404'

const CustomRoutes = () => (
    <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/error" element={<Error404 />} />
    </Routes>
)

export default CustomRoutes
