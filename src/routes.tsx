import { Routes, Route } from 'react-router'
import Home from '@pages/Home'
import Error404 from '@pages/Error404'

const CustomRoutes = () => (
    <Routes>
        <Route index element={<Home />} />
        <Route path="/error" element={<Error404 />} />
    </Routes>
)

export default CustomRoutes
