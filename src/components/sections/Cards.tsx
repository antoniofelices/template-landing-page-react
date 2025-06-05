import Card from '@components/patterns/Card'
import type { CardsSectionProps } from '@/types/interfaces'
import { transformToId } from '@helpers/utils'

const Cards = ({ content }: { content: CardsSectionProps }) => {
    const contentCards = content.cards
    const idSection = transformToId(content.title)

    return (
        <section id={idSection} className="@container/download py-11">
            <h2 className="text-center text-2xl font-bold text-blue-900 lg:text-3xl">
                {content.title}
            </h2>
            <p className="mx-auto max-w-xl p-10 text-center">
                {content.textIntro}
            </p>
            <div className="container-cards mx-auto my-10 grid gap-7 lg:max-w-4xl lg:grid-cols-3">
                {contentCards.map((card) => (
                    <Card key={card.id} contentCard={card} />
                ))}
            </div>
        </section>
    )
}

export default Cards
