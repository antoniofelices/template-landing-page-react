const TitleParagraph = ({
    title,
    text,
    variant,
}: {
    title: string
    text?: string
    variant: 'h1' | 'h2' | 'h3'
}) => {
    return (
        <>
            {variant === 'h1' && (
                <>
                    <h1 className="mf-line-height-xs my-8 text-center text-3xl font-bold text-blue-900 lg:text-left lg:text-4xl">
                        {title}
                    </h1>
                    {text && (
                        <p className="my-7 text-center lg:text-left">{text}</p>
                    )}
                </>
            )}
            {variant === 'h2' && (
                <>
                    <h2 className="text-center text-2xl font-bold text-blue-900 lg:text-3xl">
                        {title}
                    </h2>
                    {text && <p className="py-10 text-center">{text}</p>}
                </>
            )}
            {variant === 'h3' && (
                <>
                    <h3 className="text-center text-2xl font-bold text-blue-900 lg:text-left lg:text-3xl">
                        {title}
                    </h3>
                    {text && (
                        <p className="my-7 text-center lg:text-left">{text}</p>
                    )}
                </>
            )}
        </>
    )
}

export default TitleParagraph
