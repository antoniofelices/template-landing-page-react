import type { MainMenuData } from '@/types/interfaces'

const Menu = ({ content }: { content: MainMenuData[] }) => {
    return (
        <nav aria-label="Navigation">
            <ul className="menu-items">
                {content.map((item: MainMenuData) => (
                    <li key={item.text}>
                        <a href={`/#${item.url}`}>{item.text}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Menu
