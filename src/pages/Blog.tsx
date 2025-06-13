import { useState, useEffect } from 'react'
import DefaultLayout from '@layouts/DefaultLayout'
import Container from '@components/base/Container'
import TitleParagraph from '@components/patterns/TitleParagraph'
import allData from '@/data/pages/blog'
import { apiLaBonneURL, requestConfig } from '@/services/apiConfig'
import { fetchApiData } from '@/services/apiFetch'
import type { PostProps } from '@/types/interfaces'

function Blog() {
    const [data, getData] = useState<PostProps[]>([])

    const fetchData = async () => {
        const result = await fetchApiData(apiLaBonneURL, requestConfig)
        getData(result)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <DefaultLayout>
            <Container>
                <TitleParagraph title={allData.title} variant="h1" />
                {data.map((item) => (
                    <div key={item.id}>
                        <h2
                            dangerouslySetInnerHTML={{
                                __html: item.title.rendered,
                            }}
                        />
                        <p dangerouslySetInnerHTML={{ __html: item.date }} />
                        <p
                            dangerouslySetInnerHTML={{
                                __html: item.excerpt.rendered,
                            }}
                        />
                    </div>
                ))}
            </Container>
        </DefaultLayout>
    )
}

export default Blog
