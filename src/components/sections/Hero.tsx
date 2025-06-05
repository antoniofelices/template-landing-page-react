import type { HeroSectionProps } from '@/types/interfaces'

const Hero = ({ content }: { content: HeroSectionProps }) => {
    return (
        <section
            id="hero"
            className="@container/header relative py-11 after:absolute after:right-0 after:bottom-[55%] after:-z-1 after:block after:h-[240px] after:w-[300px] after:rounded-bl-[50%] after:bg-blue after:content-[''] lg:after:bottom-0 lg:after:h-[60%] lg:after:w-[40%]"
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
                        <button
                            className="rounded-lg border-2 border-blue bg-blue px-3 py-3 text-sm font-bold text-white hover:border-blue hover:bg-transparent hover:text-blue lg:px-6"
                            type="button"
                        >
                            {content.textButton1}
                        </button>
                        <button
                            className="rounded-lg border-2 px-3 py-3 text-sm font-bold shadow-lg shadow-gray-300/100 hover:border-gray-500 hover:text-gray-500 hover:shadow-none lg:px-6"
                            type="button"
                        >
                            {content.textButton2}
                        </button>
                    </div>
                </div>
                <figure className="hero-image order-1 lg:order-2">
                    <img
                        src={`/assets/images/${content.image}`}
                        alt={content.altimage}
                    />
                </figure>
            </div>
        </section>
    )
}

export default Hero
