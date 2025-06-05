import Logo from '@/components/base/Logo'
import MenuItems from '@/components/base/Menutems'
import Button from '@/components/base/Button'
import mainMenuData from '@data/mainMenuData'
import { Link } from 'react-router'

const Header = () => {
    return (
        <header
            id="header"
            className="@container/header relative container flex max-w-5xl items-center justify-between py-10"
        >
            <div className="site-icon static z-2">
                <Link to="/" arial-label="link to frontpage">
                    <Logo />
                </Link>
            </div>
            <nav className="main-menu w-[90%] lg:w-auto">
                <ul className="text-md flex flex-col text-center tracking-wide uppercase lg:flex-row lg:place-content-between lg:gap-7 lg:text-left lg:text-sm">
                    <MenuItems content={mainMenuData} />
                </ul>
            </nav>
            <Button text={'Login'} />
        </header>
    )
}

export default Header
