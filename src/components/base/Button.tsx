import type { ButtonProps } from '@/types/interfaces'
import { Link } from 'react-router'

const Button = ({
    classes,
    text,
    url,
    variant,
    buttonType = 'button',
}: ButtonProps) => {
    let variantOption =
        'border-blue bg-blue text-white hover:border-blue hover:bg-transparent hover:text-blue'

    if (variant === 'red') {
        variantOption =
            'border-red bg-red text-white hover:border-red hover:bg-white hover:text-red'
    }

    if (variant === 'transparent') {
        variantOption =
            'shadow-lg shadow-gray-300/100 hover:border-gray-500 hover:text-gray-500 hover:shadow-none'
    }

    return (
        <>
            <button
                className={`rounded-lg border-2 px-3 py-2 font-bold text-sm ${variantOption} ${classes}`}
                type={buttonType}
            >
                {url ? <Link to={url}>{text}</Link> : <>{text}</>}
            </button>
        </>
    )
}

export default Button
