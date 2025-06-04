import DefaultLayout from '@layouts/DefaultLayout'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import Downloads from '@/components/sections/Downloads'
import FAQs from '@/components/sections/FAQs'

function Home() {
    return (
        <DefaultLayout>
            <Hero />
            <Features />
            <Downloads />
            <FAQs />
        </DefaultLayout>
    )
}

export default Home
