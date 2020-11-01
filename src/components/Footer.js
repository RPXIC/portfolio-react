import React from 'react'
import { Container, LogoText } from 'styles/FooterStyles'

const year = new Date().getFullYear()

const Footer = () => {
    return (
        <Container>
            <LogoText>by RPXIC {year}</LogoText>
        </Container>
    )
}

export default Footer