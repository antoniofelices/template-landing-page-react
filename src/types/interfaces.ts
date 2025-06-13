import type { ButtonHTMLAttributes } from 'react'
export type AsideSectionProps = {
    text1: string
    text2?: string
    form?: FormSuscribeProps
    button?: ButtonProps
}
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
    classes?: string
    url?: string
    variant?: 'blue' | 'red' | 'transparent'
}
export type CardProps = {
    id: number
    title: string
    text: string
    image?: string
    buttonText?: string
}
export type CardsSectionProps = {
    title: string
    textIntro: string
    cards: CardProps[]
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
export type FormSuscribeProps = {
    textLabel: string
    textError: string
    textButton: string
}
export type HeroSectionProps = {
    title: string
    textIntro: string
    altimage?: string
    textButton1?: string
    textButton2?: string
}
export type PostProps = {
    id: number
    date: string
    excerpt: { rendered: string }
    title: { rendered: string }
    content: { rendered: string }
}

export type Routes = {
    id: number
    text: string
    url: string
    isInMenu: boolean
    orderMenu?: number
}
export type TabProps = {
    id: number
    tabTitle: string
    title: string
    text: string
    buttonText?: string
}
export type TabsSectionProps = {
    title: string
    textIntro: string
    tabs: TabProps[]
}
