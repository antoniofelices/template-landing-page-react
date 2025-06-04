import Logo from '@components/basic/Logo'
import Menu from '@components/basic/Menu'
import Button from '@components/basic/Button'
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
