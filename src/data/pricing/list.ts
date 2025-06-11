import type { CardsSectionProps } from '@/types/interfaces'

const listPricingData: CardsSectionProps = {
    title: 'List of prices',
    textIntro:
        'In a mauris interdum, commodo erat ac, consectetur dolor. Duis tempor urna quis tellus sodales tempus.',
    cards: [
        {
            id: 0,
            title: '200.00€',
            text: 'Sed bibendum sodales purus id sagittis. Sed tincidunt eros a neque volutpat',
            buttonText: 'Buy Now',
        },
        {
            id: 1,
            title: '400.00€',
            text: ' Nam sed risus pulvinar, gravida turpis sed, eleifend magna. Nulla eu risus vel dui volutpat malesuada. Ut vehicula velit in risus efficitur placerat.',
            buttonText: 'Buy Now',
        },
        {
            id: 2,
            title: '800.00€',
            text: 'Fusce quis finibus tellus. Integer at porttitor nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam et leo interdum, finibus nisl vitae, malesuada magna.',
            buttonText: 'Buy Now',
        },
    ],
}

export default listPricingData
