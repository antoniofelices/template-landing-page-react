import type { MainMenuData } from '@/types/interfaces'
import { NavLink } from 'react-router'

const MenuItems = ({ content }: { content: MainMenuData[] }) => {
    return (
        <>
            {content.map((item) => (
                <li key={item.id}>
                    <NavLink
                        to={`/${item.url}`}
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        {item.text}
                    </NavLink>
                </li>
            ))}
        </>
    )
}

export default MenuItems
