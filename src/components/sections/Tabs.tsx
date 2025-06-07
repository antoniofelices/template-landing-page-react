import Tab from '@components/patterns/Tab'
import type { TabsSectionProps } from '@/types/interfaces'
import { transformToId } from '@helpers/utils'

const Tabs = ({
    content,
    images,
}: {
    content: TabsSectionProps
    images: string[]
}) => {
    const contentTabs = content.tabs
    const idSection = transformToId(content.title)

    return (
        <section
            id={idSection}
            className="@container/features relative py-11 after:absolute after:bottom-[25%] after:left-0 after:-z-1 after:block after:h-[240px] after:w-[300px] after:rounded-br-[50%] after:bg-blue after:content-[''] lg:after:bottom-0 lg:after:h-[40%] lg:after:w-[40%]"
        >
            <div className="container max-w-5xl">
                <h2 className="text-center text-2xl font-bold text-blue-900 lg:text-3xl">
                    {content.title}
                </h2>
                <p className="mx-auto p-10 text-center lg:max-w-3xl">
                    {content.textIntro}
                </p>
                <nav className="menu-tabs mb-9 grid py-4 text-base lg:grid-cols-5">
                    {contentTabs.map((tab) => (
                        <button
                            key={tab.id}
                            type="button"
                            data-tab="simple-bookmarking"
                            className="tab-active border-t border-b border-gray-300 py-4 text-blue-900 lg:col-start-2 lg:col-end-3 lg:border-t-0"
                        >
                            {tab.tabTitle}
                        </button>
                    ))}
                </nav>
                {contentTabs.map((tab) => (
                    <Tab key={tab.id} contentTab={tab} images={images} />
                ))}
            </div>
        </section>
    )
}

export default Tabs
