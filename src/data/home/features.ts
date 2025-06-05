import type { TabsSectionProps } from '@/types/interfaces'

const featuresHomeData: TabsSectionProps = {
    title: 'Features',
    textIntro:
        'In a mauris interdum, commodo erat ac, consectetur dolor. Duis tempor urna quis tellus sodales tempus. Suspendisse suscipit nisl eu justo pretium fringilla.',
    tabs: [
        {
            tabTitle: 'Simple Bookmarking',
            title: 'Bookmarking in one Click',
            text: 'Fusce a ligula non mauris auctor ultrices. Integer semper felis a turpis dapibus porta. Integer semper hendrerit sapien.',
            buttonText: 'More info',
            image: 'illustration-features-tab-1.svg',
        },
        {
            tabTitle: 'Speedy Searching',
            title: 'Intelligent Search',
            text: 'Fusce a ligula non mauris auctor ultrices. Integer semper felis a turpis dapibus porta. Integer semper hendrerit sapien.',
            buttonText: 'More info',
            image: 'illustration-features-tab-2.svg',
        },
        {
            tabTitle: 'Easy Sharing',
            title: 'Share your bookmarks',
            text: 'Fusce a ligula non mauris auctor ultrices. Integer semper felis a turpis dapibus porta. Integer semper hendrerit sapien.',
            buttonText: 'More info',
            image: 'illustration-features-tab-3.svg',
        },
    ],
}

export default featuresHomeData
