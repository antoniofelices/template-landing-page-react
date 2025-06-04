import Logo from '@components/Logo'
import Menu from '@components/Menu'
import Button from '@components/Button'
import mainMenuData from '@data/mainMenuData'

const Header = () => {
    return (
        <header>
            <Logo />
            <Menu content={mainMenuData} />
            <Button />
        </header>
    )
}

export default Header
