import DefaultLayout from '@layouts/DefaultLayout'
import Hero from '@components/sections/Hero'
import heroContactData from '@data/contact/hero'
import FormNewsletter from '@/components/patterns/FormNewsletter'
import FormContactData from '@data/contact/form'
import illustrationHero from '@/assets/images/error404-finestre.webp'

function Contact() {
    return (
        <DefaultLayout>
            <Hero
                content={heroContactData}
                image={illustrationHero}
                backgroundImage={false}
            />
            <section className="container max-w-5xl py-11">
                <FormNewsletter content={FormContactData} />
            </section>
        </DefaultLayout>
    )
}

export default Contact
