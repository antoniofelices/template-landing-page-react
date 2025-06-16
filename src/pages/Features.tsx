import DefaultLayout from '@layouts/DefaultLayout'
import Hero from '@components/sections/Hero'
import Aside from '@components/sections/Aside'
import Cards from '@components/sections/Cards'
import Container from '@components/base/Container'
import Detail from '@components/base/Detail'
import TitleParagraph from '@components/patterns/TitleParagraph'
import {
    asideData,
    heroData,
    keyConceptsData,
    newsData,
} from '@/data/pagesData/features'

import illustrationHero from '@/assets/images/illustration-features-tab-2.svg'

function Features() {
    const news = newsData.news
    return (
        <DefaultLayout>
            <Hero
                content={heroData}
                image={illustrationHero}
                classes="bg-gray-200 text-blue-900"
            />
            <Cards content={keyConceptsData} />
            <Container>
                <TitleParagraph title={newsData.title} variant="h2" />
                {news.map((single) => (
                    <Detail key={single.id} contentDetail={single} />
                ))}
            </Container>
            <Aside content={asideData} />
        </DefaultLayout>
    )
}

export default Features
