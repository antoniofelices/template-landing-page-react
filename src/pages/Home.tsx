import DefaultLayout from '@layouts/DefaultLayout'
import Hero from '@/components/features/Hero'
import Features from '@/components/features/Features'
import Downloads from '@/components/features/Downloads'
import FAQs from '@/components/features/FAQs'

function Home() {
    return (
        <>
            <DefaultLayout>
                <Hero />
                <Features />
                <Downloads />
                <FAQs />
            </DefaultLayout>
        </>
    )
}

export default Home
