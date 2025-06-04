import Logo from '@components/Logo'
import Menu from '@components/Menu'
import mainMenuData from '@data/mainMenuData'

const Footer = () => {
    return (
        <footer>
            <Logo />
            <Menu content={mainMenuData} />
            {/* Icons social networks */}
        </footer>
    )
}

export default Footer
