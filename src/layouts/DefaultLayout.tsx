import Header from '@layouts/Header'
import Footer from '@layouts/Footer'
import type { PropsWithChildren } from 'react'

const DefaultLayout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default DefaultLayout
