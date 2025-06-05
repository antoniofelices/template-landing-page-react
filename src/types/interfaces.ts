export type ButtonProps = {
    text: string
    url?: string
    classes?: string
    buttonType?: 'button' | 'submit' | 'reset'
}
export type DetailProps = {
    id: number
    summary: string
    text: string
}
export type DetailsSectionProps = {
    title: string
    textIntro: string
    details: DetailProps[]
    textButton: string
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
export type AsideSectionProps = {
    text1: string
    text2: string
    form?: FormSuscribeProps
    button?: ButtonProps
}
export type FormSuscribeProps = {
    textLabel: string
    textError: string
    textButton: string
}
export type HeroSectionProps = {
    title: string
    textIntro: string
    image: string
    altimage: string
    textButton1: string
    textButton2: string
}
export type MainMenuData = {
    id: number
    text: string
    url: string
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
