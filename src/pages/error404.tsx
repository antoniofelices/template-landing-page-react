// import LandingLayout from '@layouts/LandingLayout'
import DefaultLayout from '@layouts/DefaultLayout'
import Hero from '@/components/sections/Hero'
import heroError404Data from '@/data/error404/hero'
import illustrationHero from '@/assets/images/error404-finestre.webp'
import { NavLink } from 'react-router'

function Error404() {
    return (
        <DefaultLayout>
            <Hero content={heroError404Data} image={illustrationHero} />
            <p className="mx-auto max-w-xl text-2xl py-15 font-bold text-blue-900 lg:text-3xl text-center">
                Please try returning to the <NavLink to="/">Front Page</NavLink>{' '}
                or the <NavLink to="/about">About Page</NavLink>.
            </p>
        </DefaultLayout>
    )
}

export default Error404
