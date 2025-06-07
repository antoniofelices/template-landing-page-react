import Button from '@/components/base/Button'
import type { CardProps } from '@/types/interfaces'

const Card = ({
    content,
    images,
}: {
    content: CardProps
    images: string[]
}) => {
    return (
        <div className="mx-8 flex flex-col items-center gap-3 rounded-lg bg-white p-10 shadow-lg shadow-gray-300/100 lg:mx-0">
            <img
                src={images[content.id]}
                height="120"
                width="120"
                alt="Logo browser"
            />
            <h3 className="items-center text-lg font-bold text-blue-900">
                {content.title}
            </h3>
            <p className="text-sm">{content.text}</p>
            <Button
                buttonType={`button`}
                text={content.buttonText}
                classes={`rounded-lg border-2 border-blue bg-blue px-3 py-2 text-sm font-bold text-white hover:border-blue hover:bg-transparent hover:text-blue`}
            />
        </div>
    )
}

export default Card
