import DefaultLayout from '@layouts/DefaultLayout'
import Hero from '@components/sections/Hero'
import Tabs from '@components/sections/Tabs'
import Cards from '@components/sections/Cards'
import Details from '@/components/sections/Details'
import Aside from '@/components/sections/Aside'

import {
    heroHomeData,
    featuresHomeData,
    donwloadsHomeData,
    faqsHomeData,
    asideHomeData,
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
                content={heroHomeData}
                image={illustrationHero}
                backgroundImage={true}
            />
            <Tabs content={featuresHomeData} images={illustrationsFeatures} />
            <Cards content={donwloadsHomeData} images={logosBrowsers} />
            <Details content={faqsHomeData} />
            <Aside content={asideHomeData} />
        </DefaultLayout>
    )
}

export default Home
