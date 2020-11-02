import React from 'react'
import { Header, Footer } from 'components'
import { GlobalStyles, App, Main } from 'styles/GlobalStyles'

const Layout = ({children}) => {
    return (
        <>
            <GlobalStyles />
            <App>
                <Header />
                <Main>
                    {children}
                </Main>
                {/* <Footer /> */}
            </App>
        </>
    )
}

export default Layout