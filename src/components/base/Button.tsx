import type { ButtonProps } from '@/types/interfaces'
import { Link } from 'react-router'

const Button = ({ text, url }: ButtonProps) => {
    return (
        <>
            <button>{url ? <Link to={url}>{text}</Link> : <>{text}</>}</button>
        </>
    )
}

export default Button
