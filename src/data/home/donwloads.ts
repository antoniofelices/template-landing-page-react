import type { CardsSectionProps } from '@/types/interfaces'

const donwloadsHomeData: CardsSectionProps = {
    title: 'Download the extension',
    textIntro:
        "We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.",
    cards: [
        {
            id: 1,
            title: 'Add to Chrome',
            text: 'Minimum version 62',
            image: 'logo-chrome.svg',
        },
        {
            id: 2,
            title: 'Add to Firefox',
            text: 'Minimum version 55',
            image: 'logo-firefox.svg',
        },
        {
            id: 3,
            title: 'Add to Opera',
            text: 'Minimum version 46',
            image: 'logo-opera.svg',
        },
    ],
}

export default donwloadsHomeData
