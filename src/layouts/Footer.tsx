import Logo from '@components/basic/Logo'
import Menu from '@components/basic/Menu'
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
