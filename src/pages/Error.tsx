import DefaultLayout from '@layouts/DefaultLayout'
import Container from '@components/base/Container'
import TitleParagraph from '@components/patterns/TitleParagraph'
import allError404Data from '@/data/error/all'
import pictureColleDelleFinestre from '@/assets/images/error404-finestre.webp'
import { NavLink } from 'react-router'

function Error404() {
    return (
        <DefaultLayout>
            <Container>
                <img
                    src={pictureColleDelleFinestre}
                    alt={allError404Data.altimage}
                />
                <TitleParagraph
                    title={allError404Data.title}
                    variant="h1"
                    text={allError404Data.textIntro}
                />
                <ul>
                    <li>
                        <NavLink to="/">Front Page</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Login</NavLink>
                    </li>
                </ul>
            </Container>
        </DefaultLayout>
    )
}

export default Error404
