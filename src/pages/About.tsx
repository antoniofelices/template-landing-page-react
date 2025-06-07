import DefaultLayout from '@layouts/DefaultLayout'
import Hero from '@/components/sections/Hero'
import Aside from '@/components/sections/Aside'
import heroAboutData from '@data/about/hero'
import asideAboutData from '@data/about/aside'
import illustrationHero from '@/assets/images/illustration-hero.svg'

function About() {
    return (
        <DefaultLayout>
            <Hero content={heroAboutData} image={illustrationHero} />
            <Aside content={asideAboutData} />
        </DefaultLayout>
    )
}

export default About
