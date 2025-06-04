import Button from '@/components/base/Button'

const Card = ({ image, title, text }) => {
    return (
        <div className="mx-8 flex flex-col items-center gap-3 rounded-lg bg-white p-10 shadow-lg shadow-gray-300/100 lg:mx-0">
            <img
                src="/assets/images/logo-opera.svg"
                height="120"
                width="120"
                alt="Logo browser Opera"
            />
            <h3 className="items-center text-lg font-bold text-blue-900">
                {title}
            </h3>
            <p className="text-sm">{text}</p>
            <Button text={''} />
        </div>
    )
}

export default Card
