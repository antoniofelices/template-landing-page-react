import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import AllRoutes from '@/routes'
import '@/styles/main.css'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <AllRoutes />
    </BrowserRouter>
)
