import DefaultLayout from '@layouts/DefaultLayout'
import Hero from '@/components/sections/Hero'
import Aside from '@/components/sections/Aside'
import heroAboutData from '@data/about/hero'
import asideAboutData from '@data/about/aside'

function About() {
    return (
        <DefaultLayout>
            <Hero content={heroAboutData} />
            <Aside content={asideAboutData} />
        </DefaultLayout>
    )
}

export default About
