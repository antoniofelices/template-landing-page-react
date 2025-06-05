import DefaultLayout from '@layouts/DefaultLayout'
import Hero from '@/components/sections/Hero'
import heroAboutData from '@data/about/hero'

function About() {
    return (
        <DefaultLayout>
            <Hero content={heroAboutData} />
        </DefaultLayout>
    )
}

export default About
