import Detail from '@components/base/Detail'
import Button from '@components/base/Button'
import TitleParagraph from '@components/patterns/TitleParagraph'
import type { DetailsSectionProps } from '@/types/interfaces'
import { transformToId } from '@helpers/utils'

const Details = ({ content }: { content: DetailsSectionProps }) => {
    const contentDetails = content.details
    const idSection = transformToId(content.title)

    return (
        <section id={idSection} className="@container/faqs py-11">
            <div className="container lg:max-w-xl">
                <TitleParagraph
                    title={content.title}
                    text={content.textIntro}
                    variant="h2"
                />
            </div>
            <div className="container max-w-xl">
                <div className="lg:border-t border-gray-300">
                    {contentDetails.map((detail) => (
                        <Detail key={detail.id} contentDetail={detail} />
                    ))}
                </div>
                <p className="my-7 flex justify-center">
                    <Button text={content.textButton} />
                </p>
            </div>
        </section>
    )
}

export default Details
