import Button from '@components/base/Button'
import type { FormSuscribeProps } from '@/types/interfaces'

const FormNewsletter = ({ content }: { content: FormSuscribeProps }) => {
    return (
        <form action="#" className="mx-auto" id="form-newsletter">
            <div className="grid gap-4 lg:grid-cols-6 lg:justify-items-start">
                <div className="relative w-full lg:col-span-4">
                    <label htmlFor="input-newsletter" className="sr-only">
                        {content.textLabel}
                    </label>
                    <input
                        type="email"
                        name="newsletter"
                        id="input-newsletter"
                        className="w-full rounded-lg bg-white px-4 py-2 text-sm font-bold text-blue-900 placeholder-blue-900 invalid:border-2 invalid:border-red focus:outline-none"
                        required
                    />
                    <p className="message-error absolute top-[2.5rem] left-0 hidden w-full bg-red px-2 text-left text-sm text-white">
                        {content.textError}
                    </p>
                </div>
                <Button
                    buttonType={`submit`}
                    classes={`w-full rounded-lg border-2 border-red bg-red px-3 py-2 text-xs font-bold text-white hover:border-red hover:bg-white hover:text-red lg:col-span-2`}
                    text={content.textButton}
                />
            </div>
        </form>
    )
}

export default FormNewsletter
