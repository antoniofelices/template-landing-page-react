export type MainMenuData = {
    text: string
    url: string
}
export type ButtonProps = {
    text: string
    url?: string
}
export type DetailsProps = {
    summary: string
    text: string
}
export type CardProps = {
    title: string
    text: string
    image: string
}
export type CardsSectionProps = {
    title: string
    textIntro: string
    card1Title: string
    card1Text: string
    card1Image: string
    card2Title: string
    card2Text: string
    card2Image: string
    card3Title: string
    card3Text: string
    card3Image: string
}
export type HeroSectionProps = {
    title: string
    textIntro: string
    image: string
    altimage: string
    textButton1: string
    textButton2: string
}
export type ReactElementProps = {
    children: React.ReactNode
}
