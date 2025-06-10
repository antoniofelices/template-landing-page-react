import DefaultLayout from '@layouts/DefaultLayout'
import Hero from '@/components/sections/Hero'
import Aside from '@/components/sections/Aside'
import Cards from '@components/sections/Cards'
import heroAboutData from '@data/about/hero'
import asideAboutData from '@data/about/aside'
import keyConceptsAboutData from '@data/about/keyConcepts'
import illustrationHero from '@/assets/images/illustration-features-tab-2.svg'

function About() {
    return (
        <DefaultLayout>
            <Hero
                content={heroAboutData}
                image={illustrationHero}
                classes="bg-gray-200 text-blue-900"
            />
            <Cards content={keyConceptsAboutData} />
            <Aside content={asideAboutData} />
        </DefaultLayout>
    )
}

export default About
