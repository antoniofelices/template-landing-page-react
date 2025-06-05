import DefaultLayout from '@layouts/DefaultLayout'
import Hero from '@components/sections/Hero'
import Features from '@components/sections/Features'
import Cards from '@/components/sections/Cards'
import FAQs from '@components/sections/FAQs'
import donwloadsHomeData from '@data/home/donwloads'
import heroHomeData from '@data/home/hero'

const Home = () => {
    return (
        <DefaultLayout>
            <Hero content={heroHomeData} />
            <Features />
            <Cards content={donwloadsHomeData} />
            <FAQs />
        </DefaultLayout>
    )
}

export default Home
