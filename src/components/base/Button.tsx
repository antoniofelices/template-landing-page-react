import type { ButtonProps } from '@/types/interfaces'
import { Link } from 'react-router'

const Button = ({ classes, text, url, buttonType = 'button' }: ButtonProps) => {
    return (
        <>
            <button className={classes} type={buttonType}>
                {url ? <Link to={url}>{text}</Link> : <>{text}</>}
            </button>
        </>
    )
}

export default Button
