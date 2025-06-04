import DefaultLayout from '@layouts/DefaultLayout'
import Hero from '@features/Hero'
import Features from '@features/Features'
import Downloads from '@features/Downloads'
import FAQs from '@features/FAQs'

function App() {
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

export default App
