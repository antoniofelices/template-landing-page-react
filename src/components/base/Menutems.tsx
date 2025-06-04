import type { MainMenuData } from '@/types/interfaces'
import { NavLink } from 'react-router'

const MenuItems = ({ content }: { content: MainMenuData[] }) => {
    return (
        <>
            {content.map((item) => (
                <li>
                    <NavLink
                        to={`/${item.url}`}
                        key={item.text}
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
