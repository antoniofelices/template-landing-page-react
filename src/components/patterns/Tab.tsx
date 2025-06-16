import Button from '@components/base/Button'
import TitleParagraph from '@components/patterns/TitleParagraph'
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
                    <TitleParagraph
                        title={contentTab.title}
                        text={contentTab.text}
                        variant="h3"
                    />
                    {contentTab.buttonText && (
                        <Button
                            classes={`hidden md:inline-block`}
                            text={contentTab.buttonText}
                            type="button"
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Tab
