import Button from '@components/base/Button'
import type { HeroSectionProps } from '@/types/interfaces'

const Hero = ({
    classes,
    content,
    image,
    backgroundImage,
}: {
    classes?: string
    content: HeroSectionProps
    image: string
    backgroundImage?: boolean
}) => {
    const classesBackgroundImage = backgroundImage
        ? `after:absolute after:right-0 after:bottom-[55%] after:-z-1 after:block after:h-[240px] after:w-[300px] after:rounded-bl-[50%] after:bg-blue after:content-[''] lg:after:bottom-0 lg:after:h-[60%] lg:after:w-[40%]`
        : ''
    const individualClasses = classes ? classes : ''

    return (
        <section
            id="hero"
            className={`@container/header relative py-11 ${classesBackgroundImage} ${individualClasses}`}
        >
            <div className="hero-container container grid max-w-5xl lg:grid-cols-2 lg:gap-(--spacing-7) lg:text-center">
                <div className="hero-text order-2 lg:order-1">
                    <h1 className="mf-line-height-xs my-8 text-center text-3xl font-bold text-blue-900 lg:text-left lg:text-4xl">
                        {content.title}
                    </h1>
                    <p className="my-7 text-center lg:text-left">
                        {content.textIntro}
                    </p>
                    <div className="flex justify-center gap-2 lg:justify-start">
                        {content.textButton1 && (
                            <Button
                                buttonType="button"
                                classes={`lg:px-6`}
                                text={content.textButton1}
                            />
                        )}
                        {content.textButton2 && (
                            <Button
                                buttonType="button"
                                classes={`lg:px-6`}
                                text={content.textButton2}
                                variant="transparent"
                            />
                        )}
                    </div>
                </div>
                <figure className="hero-image order-1 lg:order-2">
                    <img src={image} alt={content.altimage} />
                </figure>
            </div>
        </section>
    )
}

export default Hero
