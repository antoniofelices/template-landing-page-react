export type MainMenuData = {
    id: number
    text: string
    url: string
}
export type ButtonProps = {
    text: string
    url?: string
    classes?: string
    buttonType?: 'button' | 'submit' | 'reset'
}
export type DetailsProps = {
    summary: string
    text: string
}
export type CardProps = {
    id: number
    title: string
    text: string
    image: string
}
export type CardsSectionProps = {
    title: string
    textIntro: string
    cards: CardProps[]
}
export type HeroSectionProps = {
    title: string
    textIntro: string
    image: string
    altimage: string
    textButton1: string
    textButton2: string
}
export type TabProps = {
    id: number
    tabTitle: string
    title: string
    text: string
    buttonText: string
    image: string
}
export type TabsSectionProps = {
    title: string
    textIntro: string
    tabs: TabProps[]
}
export type ReactElementProps = {
    children: React.ReactNode
}
