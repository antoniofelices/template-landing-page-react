import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import CustomRoutes from './routes'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <CustomRoutes />
    </BrowserRouter>
)
