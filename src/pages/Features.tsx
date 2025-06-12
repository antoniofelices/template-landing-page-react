import DefaultLayout from '@layouts/DefaultLayout'
import Hero from '@components/sections/Hero'
import Aside from '@components/sections/Aside'
import Cards from '@components/sections/Cards'
import Container from '@components/base/Container'
import Detail from '@components/base/Detail'
import TitleParagraph from '@components/patterns/TitleParagraph'
import {
    asideFeaturesData,
    heroFeaturesData,
    keyConceptsFeaturesData,
    newsFeaturesData,
} from '@data/pages/features'

import illustrationHero from '@/assets/images/illustration-features-tab-2.svg'

function Features() {
    const news = newsFeaturesData.news
    return (
        <DefaultLayout>
            <Hero
                content={heroFeaturesData}
                image={illustrationHero}
                classes="bg-gray-200 text-blue-900"
            />
            <Cards content={keyConceptsFeaturesData} />
            <Container>
                <TitleParagraph title={newsFeaturesData.title} variant="h2" />
                {news.map((single) => (
                    <Detail key={single.id} contentDetail={single} />
                ))}
            </Container>
            <Aside content={asideFeaturesData} />
        </DefaultLayout>
    )
}

export default Features
