import DefaultLayout from '@layouts/DefaultLayout'
import Hero from '@components/sections/Hero'
import Tabs from '@components/sections/Tabs'
import Cards from '@components/sections/Cards'
import Details from '@/components/sections/Details'
import Aside from '@/components/sections/Aside'
import heroHomeData from '@data/home/hero'
import featuresHomeData from '@data/home/features'
import donwloadsHomeData from '@data/home/donwloads'
import faqsHomeData from '@data/home/faqs'
import asideHomeData from '@data/home/aside'

const Home = () => {
    return (
        <DefaultLayout>
            <Hero content={heroHomeData} />
            <Tabs content={featuresHomeData} />
            <Cards content={donwloadsHomeData} />
            <Details content={faqsHomeData} />
            <Aside content={asideHomeData} />
        </DefaultLayout>
    )
}

export default Home
