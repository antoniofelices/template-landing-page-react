import DefaultLayout from '@layouts/DefaultLayout'
import Container from '@components/base/Container'
import Card from '@components/patterns/Card'
import TitleParagraph from '@components/patterns/TitleParagraph'
import allContactData from '@/data/pages/contact'
import FormNewsletter from '@/components/patterns/FormNewsletter'

function Contact() {
    return (
        <DefaultLayout>
            <Container>
                <TitleParagraph
                    title={allContactData.title}
                    text={allContactData.textIntro}
                    variant="h1"
                />
                <div className="grid gap-7 lg:max-w-4xl lg:grid-cols-2 py-11">
                    <Card content={allContactData.infoDepartment1} />
                    <Card content={allContactData.infoDepartment2} />
                </div>
                <section className="max-w-xl py-11">
                    <FormNewsletter content={allContactData.form} />
                </section>
            </Container>
        </DefaultLayout>
    )
}

export default Contact
