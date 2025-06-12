import DefaultLayout from '@layouts/DefaultLayout'
import Container from '@components/base/Container'
import TitleParagraph from '@components/patterns/TitleParagraph'
import allData from '@/data/pages/error'
import pictureColleDelleFinestre from '@/assets/images/error404-finestre.webp'
import { NavLink } from 'react-router'

function Error404() {
    return (
        <DefaultLayout>
            <Container>
                <img src={pictureColleDelleFinestre} alt={allData.altimage} />
                <TitleParagraph
                    title={allData.title}
                    variant="h1"
                    text={allData.textIntro}
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
