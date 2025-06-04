import type { DetailsProps } from '@/types/interfaces'

const Detail = ({ summary, text }: DetailsProps) => {
    return (
        <details>
            <summary>{summary}</summary>
            <p>{text}</p>
        </details>
    )
}

export default Detail
