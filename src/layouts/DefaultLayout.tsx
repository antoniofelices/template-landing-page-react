import Header from '@layouts/Header'
import Footer from '@layouts/Footer'
// import type { ReactElementProps } from '@/types/interfaces'
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
