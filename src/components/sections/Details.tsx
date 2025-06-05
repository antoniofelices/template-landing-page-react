import Detail from '@components/base/Detail'
import Button from '@components/base/Button'
import type { DetailsSectionProps } from '@/types/interfaces'
import { transformToId } from '@helpers/utils'

const Details = ({ content }: { content: DetailsSectionProps }) => {
    const contentDetails = content.details
    const idSection = transformToId(content.title)

    return (
        <section id={idSection} className="@container/faqs py-11">
            <div className="container max-w-xl">
                <h2 className="text-center text-2xl font-bold text-blue-900 lg:text-3xl">
                    {content.title}
                </h2>
                <p className="py-10 text-center">{content.textIntro}</p>
                <div className="">
                    {contentDetails.map((detail) => (
                        <Detail key={detail.id} contentDetail={detail} />
                    ))}
                </div>
                <p className="my-7 flex justify-center">
                    <Button
                        classes={`rounded-lg border-2 border-blue bg-blue px-6 py-3 text-sm font-bold text-white hover:border-blue hover:bg-transparent hover:text-blue`}
                        text={content.textButton}
                    />
                </p>
            </div>
        </section>
    )
}

export default Details
