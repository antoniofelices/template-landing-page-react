import type { DetailProps } from '@/types/interfaces'

const Detail = ({ contentDetail }: { contentDetail: DetailProps }) => {
    return (
        <details className="my-3 border-b border-gray-300 stroke-blue py-5 marker:content-[''] open:stroke-red">
            <summary className="flex items-center justify-between text-blue-900 lg:text-lg">
                {contentDetail.summary}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 18 12"
                    className="h-[.5rem]"
                >
                    <path fill="none" strokeWidth="3" d="M1 1l8 8 8-8" />
                </svg>
            </summary>
            <p className="my-5">{contentDetail.text}</p>
        </details>
    )
}

export default Detail
