import DefaultLayout from '@layouts/DefaultLayout'
import Hero from '@components/sections/Hero'
import Aside from '@components/sections/Aside'
import Cards from '@components/sections/Cards'
import heroFeaturesData from '@data/features/hero'
import asideFeaturesData from '@data/features/aside'
import keyConceptsFeaturesData from '@data/features/keyConcepts'
import illustrationHero from '@/assets/images/illustration-features-tab-2.svg'

function Features() {
    return (
        <DefaultLayout>
            <Hero
                content={heroFeaturesData}
                image={illustrationHero}
                classes="bg-gray-200 text-blue-900"
            />
            <Cards content={keyConceptsFeaturesData} />
            <Aside content={asideFeaturesData} />
        </DefaultLayout>
    )
}

export default Features
