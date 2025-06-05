import type { ButtonProps } from '@/types/interfaces'
import { Link } from 'react-router'

const Button = ({ classes, text, url, buttonType }: ButtonProps) => {
    return (
        <>
            <button className={classes}>
                {url ? <Link to={url}>{text}</Link> : <>{text}</>}
            </button>
        </>
    )
}

export default Button
