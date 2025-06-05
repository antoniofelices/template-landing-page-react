import Card from '@components/patterns/Card'
import type { CardsSectionProps } from '@/types/interfaces'

const Cards = ({ content }: { content: CardsSectionProps }) => {
    return (
        <section>
            <Card
                title={content.card1Title}
                text={content.card1Text}
                image={content.card1Image}
            />
            <Card
                title={content.card2Title}
                text={content.card2Text}
                image={content.card2Image}
            />
            <Card
                title={content.card3Title}
                text={content.card3Text}
                image={content.card3Image}
            />
        </section>
    )
}

export default Cards
