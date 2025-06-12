import DefaultLayout from '@layouts/DefaultLayout'
import Hero from '@components/sections/Hero'
import Tabs from '@components/sections/Tabs'
import Cards from '@components/sections/Cards'
import Details from '@/components/sections/Details'
import Aside from '@/components/sections/Aside'

import {
    heroData,
    featuresData,
    donwloadsData,
    faqsData,
    asideData,
} from '@/data/pages/home'

import illustrationHero from '@/assets/images/illustration-hero.svg'
import illustrationFeaturesTab1 from '@/assets/images/illustration-features-tab-1.svg'
import illustrationFeaturesTab2 from '@/assets/images/illustration-features-tab-2.svg'
import illustrationFeaturesTab3 from '@/assets/images/illustration-features-tab-3.svg'
import logoChrome from '@/assets/images/logo-chrome.svg'
import logoFirefox from '@/assets/images/logo-firefox.svg'
import logoOpera from '@/assets/images/logo-opera.svg'

const Home = () => {
    const illustrationsFeatures = [
        illustrationFeaturesTab1,
        illustrationFeaturesTab2,
        illustrationFeaturesTab3,
    ]

    const logosBrowsers = [logoChrome, logoFirefox, logoOpera]

    return (
        <DefaultLayout>
            <Hero
                content={heroData}
                image={illustrationHero}
                backgroundImage={true}
            />
            <Tabs content={featuresData} images={illustrationsFeatures} />
            <Cards content={donwloadsData} images={logosBrowsers} />
            <Details content={faqsData} />
            <Aside content={asideData} />
        </DefaultLayout>
    )
}

export default Home
