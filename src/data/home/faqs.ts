import type { DetailsSectionProps } from '@/types/interfaces'

const faqsHomeData: DetailsSectionProps = {
    title: 'Frequently Asked Questions',
    textIntro:
        "Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.",
    details: [
        {
            id: 0,
            summary: 'What is Bookmark?',
            text: 'Donec eget porttitor turpis, sed molestie odio. Suspendisse luctus nisl et nisl pharetra volutpat. Quisque lobortis sollicitudin mi non maximus.',
        },
        {
            id: 1,
            summary: 'How can I request a new browsers?',
            text: 'Nam luctus commodo nisi, sit amet dapibus leo iaculis non. In pretium mi at condimentum tempus. Integer auctor, diam at blandit tristique, lorem dolor lacinia lorem, eget dapibus velit lectus quis sapien.',
        },
        {
            id: 2,
            summary: 'Is there a mobile app?',
            text: 'Donec eget porttitor turpis, sed molestie odio. Suspendisse luctus nisl et nisl pharetra volutpat. Aliquam euismod neque ac posuere facilisis. Integer vehicula lacus ac lectus posuere dictum. Aliquam erat volutpat. Quisque lobortis sollicitudin mi non maximus. Proin a lacus eu urna gravida luctus. Sed ullamcorper quis tortor ac sodales.',
        },
        {
            id: 3,
            summary: 'What about other Chromium browsers?',
            text: 'Dapibus velit lectus quis sapien. Integer urna justo, finibus id fermentum vitae, convallis consequat nunc. Suspendisse luctus nisl et nisl pharetra volutpat. Quisque lobortis sollicitudin mi non maximus.',
        },
    ],
    textButton: 'More Info',
}

export default faqsHomeData
