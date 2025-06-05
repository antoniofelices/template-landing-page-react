import Button from '@/components/base/Button'
import type { CardProps } from '@/types/interfaces'

const Card = ({ contentCard }: { contentCard: CardProps }) => {
    return (
        <div className="mx-8 flex flex-col items-center gap-3 rounded-lg bg-white p-10 shadow-lg shadow-gray-300/100 lg:mx-0">
            <img
                src={`/assets/images/${contentCard.image}`}
                height="120"
                width="120"
                alt="Logo browser"
            />
            <h3 className="items-center text-lg font-bold text-blue-900">
                {contentCard.title}
            </h3>
            <p className="text-sm">{contentCard.text}</p>
            <Button
                buttonType={`button`}
                text={'#'}
                classes={`rounded-lg border-2 border-blue bg-blue px-3 py-2 text-sm font-bold text-white hover:border-blue hover:bg-transparent hover:text-blue`}
            />
        </div>
    )
}

export default Card
