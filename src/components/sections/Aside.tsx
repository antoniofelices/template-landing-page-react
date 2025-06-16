import type { AsideSectionProps } from '@/types/interfaces'
import FormNewsletter from '@components/patterns/FormNewsletter'
import Button from '@components/base/Button'

const Aside = ({ content }: { content: AsideSectionProps }) => {
    return (
        <aside className="container-form-newsletter @container/form-newsletter bg-blue py-15">
            <div className="container max-w-md text-center text-white">
                <p className="text-sm tracking-[.25em] uppercase">
                    {content.text1}
                </p>
                <p className="my-4 text-xl lg:my-6 lg:text-3xl">
                    {content.text2}
                </p>
                {content.form && <FormNewsletter content={content.form} />}
                {content.button && (
                    <Button
                        text={content.button.text}
                        variant="red"
                        type="button"
                    />
                )}
            </div>
        </aside>
    )
}

export default Aside
