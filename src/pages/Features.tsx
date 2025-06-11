import DefaultLayout from '@layouts/DefaultLayout'
import Hero from '@components/sections/Hero'
import Aside from '@components/sections/Aside'
import Cards from '@components/sections/Cards'
import Container from '@components/base/Container'
import Detail from '@components/base/Detail'
import TitleParagraph from '@components/patterns/TitleParagraph'
import heroFeaturesData from '@data/features/hero'
import asideFeaturesData from '@data/features/aside'
import { title, detail01, detail02 } from '@/data/features/news'
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
            <Container>
                <TitleParagraph title={title} variant="h2" />
                <Detail contentDetail={detail01} />
                <Detail contentDetail={detail02} />
            </Container>
            <Aside content={asideFeaturesData} />
        </DefaultLayout>
    )
}

export default Features
