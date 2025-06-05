import DefaultLayout from '@layouts/DefaultLayout'
import Hero from '@components/sections/Hero'
import Tabs from '@components/sections/Tabs'
import Cards from '@components/sections/Cards'
import FAQs from '@components/sections/FAQs'
import heroHomeData from '@data/home/hero'
import featuresHomeData from '@data/home/features'
import donwloadsHomeData from '@data/home/donwloads'
import faqsHomeData from '@data/home/faqs'

const Home = () => {
    return (
        <DefaultLayout>
            <Hero content={heroHomeData} />
            <Tabs content={featuresHomeData} />
            <Cards content={donwloadsHomeData} />
            <FAQs content={faqsHomeData} />
        </DefaultLayout>
    )
}

export default Home
