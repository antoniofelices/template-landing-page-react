import Button from '@components/base/Button'
import type { TabProps } from '@/types/interfaces'
import { transformToId } from '@helpers/utils'

const Tab = ({
    contentTab,
    images,
}: {
    contentTab: TabProps
    images: string[]
}) => {
    const tabTitleId = transformToId(contentTab.tabTitle)

    return (
        <div id={tabTitleId} className="content-tab show hidden">
            <div className="grid items-center lg:grid-cols-2 lg:gap-(--spacing-7)">
                <img src={images[contentTab.id]} alt="backend app" />
                <div className="my-7">
                    <h3 className="text-center text-2xl font-bold text-blue-900 lg:text-left lg:text-3xl">
                        {contentTab.title}
                    </h3>
                    <p className="my-7 text-center lg:text-left">
                        {contentTab.text}
                    </p>
                    <Button
                        classes={`hidden md:inline-block`}
                        text={contentTab.buttonText}
                        variant="blue"
                    />
                </div>
            </div>
        </div>
    )
}

export default Tab
