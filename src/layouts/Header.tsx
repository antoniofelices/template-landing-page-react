import Logo from '@/components/base/Logo'
import MenuItems from '@/components/base/Menutems'
import Button from '@/components/base/Button'
import mainMenuData from '@/data/routesData'
import { Link } from 'react-router'
import SocialMenu from '@/components/patterns/SocialMenu'

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
            <button
                id="mobile-dropdown-toggle"
                arial-label="access to menu"
                type="button"
                className="static z-2 lg:hidden"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 15"
                    arial-hidden="true"
                    className="dropdown-toggle h-[1rem]"
                >
                    <path
                        className="open fill-blue-900"
                        fillRule="evenodd"
                        d="M0 0h18v3H0V0zm0 6h18v3H0V6zm0 6h18v3H0v-3z"
                    />
                    <path
                        className="close hidden fill-white"
                        fillRule="evenodd"
                        d="M8 5.379L13.303.075l2.122 2.122L10.12 7.5l5.304 5.303-2.122 2.122L8 9.62l-5.303 5.304-2.122-2.122L5.88 7.5.575 2.197 2.697.075 8 5.38z"
                    />
                </svg>
            </button>
            <div
                id="container-nav-header"
                className="fixed top-0 left-0 z-1 hidden h-dvh w-dvw bg-blue-900/90 lg:static lg:block lg:h-auto lg:w-auto lg:bg-transparent"
            >
                <div className="flex h-1/2 flex-col items-center pt-[8rem] lg:h-auto lg:flex-row lg:place-content-between lg:gap-4 lg:pt-0">
                    <nav className="main-menu w-[90%] lg:w-auto">
                        <ul className="text-md flex flex-col text-center tracking-wide uppercase lg:flex-row lg:place-content-between lg:gap-7 lg:text-left lg:text-sm">
                            <MenuItems content={mainMenuData} />
                        </ul>
                    </nav>
                    <Button
                        text={'Login'}
                        variant="red"
                        classes={`mt-6 w-[90%] tracking-wide uppercase lg:mt-0 lg:w-auto lg:font-normal px-7`}
                        url="/login"
                    />
                </div>
                <nav className="social-menu pt-[6rem] lg:hidden lg:pt-0">
                    <SocialMenu />
                </nav>
            </div>
        </header>
    )
}

export default Header
