import React from 'react'
import { Navbar } from 'components'
import { Logo, Container, Content, LogoText } from 'styles/HeaderStyles'

const Header = () => {
    return (
        <Container>
            <Content>
                <Logo to='/'><LogoText>RP</LogoText></Logo>
                <Navbar />
            </Content>
        </Container>
    )
}

export default Header