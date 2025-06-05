import Button from '@components/base/Button'
import type { TabProps } from '@/types/interfaces'
import { transformToId } from '@helpers/utils'

const Tab = ({ contentTab }: { contentTab: TabProps }) => {
    const tabTitleId = transformToId(contentTab.tabTitle)

    return (
        <div id={tabTitleId} className="content-tab show hidden">
            <div className="grid items-center lg:grid-cols-2 lg:gap-(--spacing-7)">
                <img
                    src={`/assets/images/${contentTab.image}`}
                    alt="backend app"
                />
                <div className="my-7">
                    <h3 className="text-center text-2xl font-bold text-blue-900 lg:text-left lg:text-3xl">
                        {contentTab.title}
                    </h3>
                    <p className="my-7 text-center lg:text-left">
                        {contentTab.text}
                    </p>
                    <Button
                        classes={`hidden rounded-lg border-2 border-blue bg-blue px-6 py-3 text-sm font-bold text-white hover:border-blue hover:bg-transparent hover:text-blue md:inline-block`}
                        text={contentTab.buttonText}
                    />
                </div>
            </div>
        </div>
    )
}

export default Tab
